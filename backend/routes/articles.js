const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    importArticles,
    autosaveArticle // Added autosave export
} = require('../controllers/articles');
const { protect } = require('../middleware/auth');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/import', protect, upload.single('file'), importArticles);

router.route('/')
    .get(getArticles)
    .post(protect, upload.single('featuredImage'), createArticle);

// Protected CRUD routes must come BEFORE the slug route
router.route('/:id/autosave')
    .post(protect, autosaveArticle);

router.route('/:id')
    .put(protect, upload.single('featuredImage'), updateArticle)
    .delete(protect, deleteArticle)
    .get(getArticle);

module.exports = router;
