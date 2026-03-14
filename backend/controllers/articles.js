const Article = require('../models/Article');
const Draft = require('../models/Draft');
const slugify = require('slugify');
const { saveAndSync } = require('../utils/gitSync');
const Category = require('../models/Category');
const ArticleVersion = require('../models/ArticleVersion');
const { z } = require('zod');

// Article Validation Schema
const articleSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    content: z.string().min(10, 'Content must be at least 10 characters'),
    category: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid category ID'),
    status: z.enum(['Draft', 'Published']).optional(),
    publicationDate: z.string().optional(),
    featuredImage: z.string().optional(),
    author: z.string().optional()
});

// @route   GET /api/articles
// @desc    Get all articles
// @access  Public
exports.getArticles = async (req, res) => {
    try {
        let articles = [];

        // If admin is requesting, they might want to see all
        if (req.user && req.query.admin === 'true') {
            const published = await Article.find().populate('category', 'name').lean();
            const drafts = await Draft.find().populate('category', 'name').lean();
            articles = [...drafts, ...published];
            articles.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
        } else {
            // Public only sees published
            articles = await Article.find({ status: 'Published' }).populate('category', 'name');
        }

        res.status(200).json({ success: true, count: articles.length, data: articles });
    } catch (error) {
        console.error('Error in getArticles:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   GET /api/articles/:id
// @desc    Get single article by ID or slug
// @access  Public
exports.getArticle = async (req, res) => {
    try {
        let article;
        const id = req.params.id;

        // Try by ID first (for admin), then by slug (for public)
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            article = await Article.findById(id).populate('category', 'name');
            if (!article) article = await Draft.findById(id).populate('category', 'name');
        }

        if (!article) {
            article = await Article.findOne({ slug: id }).populate('category', 'name');
            if (!article) article = await Draft.findOne({ slug: id }).populate('category', 'name');
        }

        if (!article) {
            return res.status(404).json({ success: false, error: 'Article not found' });
        }

        res.status(200).json({ success: true, data: article });
    } catch (error) {
        console.error('Error in getArticles:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   POST /api/articles
// @desc    Create new article
// @access  Private (Admin)
exports.createArticle = async (req, res) => {
    try {
        // Validation
        const validation = articleSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
                success: false,
                error: validation.error.errors.map(e => e.message).join(', ')
            });
        }

        req.body.slug = slugify(req.body.title, { lower: true });

        // If file uploaded, add to body
        if (req.file) {
            req.body.featuredImage = req.file.filename;
        }

        let article;
        if (req.body.status === 'Draft') {
            article = await Draft.create(req.body);
            await saveAndSync(`VCS [Drafts]: Admin created draft "${req.body.title}"`);
        } else {
            article = await Article.create(req.body);
            await saveAndSync(`VCS [Articles]: Admin published article "${req.body.title}"`);
        }

        res.status(201).json({ success: true, data: article });
    } catch (error) {
        console.error('Create Error:', error);
        if (error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Article with this title already exists' });
        }
        res.status(500).json({ success: false, error: error.message });
    }
};

// @route   PUT /api/articles/:id
// @desc    Update article
// @access  Private (Admin)
exports.updateArticle = async (req, res) => {
    try {
        const id = req.params.id;

        // Validation (partial allowed for update)
        const validation = articleSchema.partial().safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
                success: false,
                error: validation.error.errors.map(e => e.message).join(', ')
            });
        }

        let isCurrentlyDraft = true;
        let existing = await Draft.findById(id);

        if (!existing) {
            existing = await Article.findById(id);
            isCurrentlyDraft = false;
        }

        if (!existing) {
            return res.status(404).json({ success: false, error: 'Article not found' });
        }

        if (req.body.title) {
            req.body.slug = slugify(req.body.title, { lower: true });
        }

        if (req.file) {
            req.body.featuredImage = req.file.filename;
        }

        const newStatus = req.body.status || existing.status;
        let updatedArticle;

        // Promote or demote between Draft and Published databases
        if (isCurrentlyDraft && newStatus === 'Published') {
            const data = { ...existing.toObject(), ...req.body, status: 'Published' };
            // Ensure ID is preserved
            delete data._id;
            updatedArticle = await Article.create({ ...data, _id: existing._id });
            await existing.deleteOne();
        } else if (!isCurrentlyDraft && newStatus === 'Draft') {
            const data = { ...existing.toObject(), ...req.body, status: 'Draft' };
            delete data._id;
            updatedArticle = await Draft.create({ ...data, _id: existing._id });
            await existing.deleteOne();
        } else {
            // Normal update without moving logic
            const Model = isCurrentlyDraft ? Draft : Article;
            updatedArticle = await Model.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        }

        await saveAndSync(`VCS [Articles]: Admin updated article "${updatedArticle.title}"`);

        await ArticleVersion.create({
            documentId: updatedArticle._id,
            documentModel: updatedArticle.status === 'Draft' ? 'Draft' : 'Article',
            title: updatedArticle.title,
            content: updatedArticle.content,
            category: updatedArticle.category,
            status: updatedArticle.status,
            versionType: 'manual_save'
        });

        res.status(200).json({ success: true, data: updatedArticle });
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ success: false, error: 'Server error', details: error.message });
    }
};

// @route   DELETE /api/articles/:id
// @desc    Delete article
// @access  Private (Admin)
exports.deleteArticle = async (req, res) => {
    try {
        const id = req.params.id;
        let article = await Article.findById(id);

        if (article) {
            await article.deleteOne();
        } else {
            article = await Draft.findById(id);
            if (article) {
                await article.deleteOne();
            } else {
                return res.status(404).json({ success: false, error: 'Article not found' });
            }
        }

        await saveAndSync(`VCS [Articles]: Admin deleted article with ID ${id}`);

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        console.error("Error in deleteArticle:", error);
        res.status(500).json({ success: false, error: 'Server error', details: error.message });
    }
};

// @route   POST /api/articles/import
// @desc    Import articles from JSON file
// @access  Private (Admin)
exports.importArticles = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, error: 'Please upload a JSON file' });
        }

        const fs = require('fs');
        const fileContent = fs.readFileSync(req.file.path, 'utf8');
        const articles = JSON.parse(fileContent);

        if (!Array.isArray(articles)) {
            return res.status(400).json({ success: false, error: 'Invalid format: Expected an array of articles' });
        }

        let importedCount = 0;
        for (const articleData of articles) {
            // Find or create category
            let categoryId = articleData.category;
            if (typeof categoryId === 'string' && !categoryId.match(/^[0-9a-fA-F]{24}$/)) {
                let cat = await Category.findOne({ name: categoryId });
                if (!cat) {
                    cat = await Category.create({ name: categoryId });
                }
                categoryId = cat._id;
            }

            const slug = slugify(articleData.title, { lower: true });

            // Avoid duplicates
            const existing = await Article.findOne({ slug });
            if (!existing) {
                await Article.create({
                    ...articleData,
                    category: categoryId,
                    slug
                });
                importedCount++;
            }
        }

        await saveAndSync(`VCS [Articles]: Admin imported ${importedCount} articles from JSON`);

        // Clean up uploaded file
        fs.unlinkSync(req.file.path);

        res.status(200).json({ success: true, message: `Successfully imported ${importedCount} articles` });
    } catch (error) {
        console.error('Import Error:', error);
        res.status(500).json({ success: false, error: 'Failed to import articles: ' + error.message });
    }
};

// @route   POST /api/articles/:id/autosave
// @desc    Autosave an existing article/draft
// @access  Private (Admin)
exports.autosaveArticle = async (req, res) => {
    try {
        const id = req.params.id;

        let existing = await Draft.findById(id);
        let Model = Draft;
        let documentModel = 'Draft';
        if (!existing) {
            existing = await Article.findById(id);
            Model = Article;
            documentModel = 'Article';
        }

        if (!existing) {
            return res.status(404).json({ success: false, error: 'Document not found' });
        }

        // Update the document
        existing = await Model.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        // Create an autosave version
        await ArticleVersion.create({
            documentId: existing._id,
            documentModel,
            title: existing.title,
            content: existing.content || req.body.content,
            category: existing.category || req.body.category,
            status: existing.status,
            versionType: 'autosave'
        });

        res.status(200).json({ success: true, data: existing });
    } catch (error) {
        console.error('Autosave Article Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
