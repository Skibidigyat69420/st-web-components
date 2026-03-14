const { scanArticles, findArticle } = require('../utils/articleScanner');

// @route   GET /api/file-articles
// @desc    Get all articles from the articles directory
// @access  Public
exports.getFileArticles = async (req, res) => {
    try {
        const articles = await scanArticles();
        res.status(200).json({ success: true, count: articles.length, data: articles });
    } catch (error) {
        console.error('Error in getFileArticles:', error);
        res.status(500).json({ success: false, error: 'Failed to scan articles directory' });
    }
};

// @route   GET /api/file-articles/:idOrSlug
// @desc    Get a single file-based article by ID or slug
// @access  Public
exports.getFileArticle = async (req, res) => {
    try {
        const article = await findArticle(req.params.idOrSlug);
        if (!article) {
            return res.status(404).json({ success: false, error: 'Article not found in files' });
        }
        res.status(200).json({ success: true, data: article });
    } catch (error) {
        console.error('Error in getFileArticle:', error);
        res.status(500).json({ success: false, error: 'Failed to read article file' });
    }
};
