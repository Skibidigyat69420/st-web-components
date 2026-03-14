const Draft = require('../models/Draft');
const Article = require('../models/Article');
const ArticleVersion = require('../models/ArticleVersion');
const slugify = require('slugify');

// @route   GET /api/drafts
// @desc    Get all drafts
// @access  Private
exports.getDrafts = async (req, res) => {
    try {
        const drafts = await Draft.find().populate('category', 'name').sort('-createdAt');
        res.status(200).json({ success: true, count: drafts.length, data: drafts });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   GET /api/drafts/:id
// @desc    Get single draft
// @access  Private
exports.getDraft = async (req, res) => {
    try {
        const draft = await Draft.findById(req.params.id).populate('category', 'name');
        if (!draft) {
            return res.status(404).json({ success: false, error: 'Draft not found' });
        }
        res.status(200).json({ success: true, data: draft });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   POST /api/drafts/autosave
// @desc    Autosave a draft (create or update)
// @access  Private
exports.autosaveDraft = async (req, res) => {
    try {
        const { id, title, content, category, status, publicationDate } = req.body;

        let draft;
        const draftData = {
            title: title || 'Untitled Draft',
            content: content || '',
            status: status || 'Draft',
            publicationDate: publicationDate || new Date(),
            slug: title ? slugify(title, { lower: true }) : `draft-${Date.now()}`
        };

        if (category && category.match(/^[0-9a-fA-F]{24}$/)) {
            draftData.category = category;
        } else {
            const Category = require('../models/Category');
            let uncat = await Category.findOne({ name: 'Uncategorized' });
            if (!uncat) {
                uncat = await Category.create({ name: 'Uncategorized' });
            }
            draftData.category = uncat._id;
        }

        if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
            try {
                draft = await Draft.findByIdAndUpdate(id, draftData, { new: true, runValidators: true });
            } catch (err) {
                if (err.code === 11000) {
                    draftData.slug = `${draftData.slug}-${Math.floor(Math.random()*10000)}`;
                    draft = await Draft.findByIdAndUpdate(id, draftData, { new: true, runValidators: true });
                } else throw err;
            }
        }

        if (!draft) {
            try {
                draft = await Draft.create(draftData);
            } catch (err) {
                if (err.code === 11000) {
                    draftData.slug = `${draftData.slug}-${Math.floor(Math.random()*10000)}`;
                    draft = await Draft.create(draftData);
                } else throw err;
            }
        }

        // NOTE: saveAndSync is intentionally NOT called for autosaves.
        // It triggers a full DB backup + git push which causes 30s MongoDB timeouts.
        // Autosaves are ephemeral and don't need VCS tracking.

        // Create a new version record
        await ArticleVersion.create({
            documentId: draft._id,
            documentModel: 'Draft',
            title: draft.title,
            content: draft.content,
            category: draft.category,
            status: draft.status,
            versionType: 'autosave'
        });

        res.status(200).json({ success: true, data: draft });
    } catch (error) {
        console.error('Autosave Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// @route   DELETE /api/drafts/:id
// @desc    Delete a draft
// @access  Private
exports.deleteDraft = async (req, res) => {
    try {
        const draft = await Draft.findById(req.params.id);
        if (!draft) {
            return res.status(404).json({ success: false, error: 'Draft not found' });
        }
        await draft.deleteOne();

        const { saveAndSync } = require('../utils/gitSync');
        await saveAndSync(`VCS [Drafts]: Admin deleted draft "${draft.title}"`);

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
