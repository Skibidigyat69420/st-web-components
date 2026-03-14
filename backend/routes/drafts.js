const express = require('express');
const router = express.Router();
const {
    getDrafts,
    getDraft,
    autosaveDraft,
    deleteDraft
} = require('../controllers/drafts');
const { protect } = require('../middleware/auth');

router.use(protect); // All draft routes are protected

router.route('/')
    .get(getDrafts);

router.route('/autosave')
    .post(autosaveDraft);

router.route('/:id')
    .get(getDraft)
    .delete(deleteDraft);

module.exports = router;
