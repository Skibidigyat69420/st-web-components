const Category = require('../models/Category');
const { saveAndSync } = require('../utils/gitSync');

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, count: categories.length, data: categories });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   POST /api/categories
// @desc    Create a category
// @access  Private (Admin)
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);

        saveAndSync("Auto-backup: Admin created a new category");

        res.status(201).json({ success: true, data: category });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Category already exists' });
        }
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   PUT /api/categories/:id
// @desc    Update a category
// @access  Private (Admin)
exports.updateCategory = async (req, res) => {
    try {
        let category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ success: false, error: 'Category not found' });
        }

        category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        saveAndSync(`Auto-backup: Admin updated category ${category.name}`);

        res.status(200).json({ success: true, data: category });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, error: 'Category name already exists' });
        }
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   DELETE /api/categories/:id
// @desc    Delete a category
// @access  Private (Admin)
exports.deleteCategory = async (req, res) => {
    try {
        const Article = require('../models/Article');
        const categoryId = req.params.id;

        // Check if category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ success: false, error: 'Category not found' });
        }

        // Safety Check: Are there articles using this category?
        const articleCount = await Article.countDocuments({ category: categoryId });
        if (articleCount > 0) {
            return res.status(400).json({
                success: false,
                error: `Cannot delete category: it is currently being used by ${articleCount} article(s). Please reassign or delete the articles first.`
            });
        }

        await category.deleteOne();

        saveAndSync(`Auto-backup: Admin deleted category ${category.name}`);

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        console.error('Delete Category Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
