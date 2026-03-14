const express = require('express');
const router = express.Router();
const { getLeads, exportLeads, updateLead, deleteLead } = require('../controllers/leads');
const { protect } = require('../middleware/auth');

router.use(protect); // All lead routes are protected

router.get('/', getLeads);
router.get('/export', exportLeads);
router.route('/:id')
    .put(updateLead)
    .delete(deleteLead);

module.exports = router;
