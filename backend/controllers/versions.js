const ArticleVersion = require('../models/ArticleVersion');

// @route   GET /api/versions/:documentId
// @desc    Get all versions for a specific document (Article or Draft)
// @access  Private
exports.getVersions = async (req, res) => {
    try {
        const versions = await ArticleVersion.find({ documentId: req.params.documentId })
            .sort('-createdAt')
            .limit(50); // Limit to last 50 versions for performance

        res.status(200).json({ success: true, count: versions.length, data: versions });
    } catch (error) {
        console.error('Error fetching versions:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   GET /api/versions/single/:id
// @desc    Get a single version by its ID
// @access  Private
exports.getVersion = async (req, res) => {
    try {
        const version = await ArticleVersion.findById(req.params.id);
        if (!version) {
            return res.status(404).json({ success: false, error: 'Version not found' });
        }
        res.status(200).json({ success: true, data: version });
    } catch (error) {
        console.error('Error fetching single version:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
