const express = require('express');
const router = express.Router();
const { getFileArticles, getFileArticle } = require('../controllers/fileArticles');

router.route('/').get(getFileArticles);
router.route('/:idOrSlug').get(getFileArticle);

module.exports = router;
