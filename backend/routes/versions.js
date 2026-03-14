const express = require('express');
const router = express.Router();
const { getVersions, getVersion } = require('../controllers/versions');
const { protect } = require('../middleware/auth');

router.get('/:documentId', protect, getVersions);
router.get('/single/:id', protect, getVersion);

module.exports = router;
