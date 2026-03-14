const express = require('express');
const router = express.Namespace ? express.Namespace() : express.Router();
const { saveAndSync, syncToGit } = require('../../utils/gitSync');
const { backupDatabase } = require('../../utils/dbBackup');
const { protect } = require('../../middleware/auth');

// @route   POST /api/admin/sync-git
// @desc    Manually trigger git sync
// @access  Private (Admin)
router.post('/sync-git', protect, (req, res) => {
    try {
        syncToGit("Manual backup: Triggered by user via Admin UI");
        res.status(200).json({ success: true, message: 'Git sync initiated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to initiate Git sync' });
    }
});
const Article = require('../../models/Article');
const Category = require('../../models/Category');
const Lead = require('../../models/Lead');
const fs = require('fs');
const path = require('path');

// @route   POST /api/admin/save-changes
// @desc    Dump in-memory DB collections to JSON files
// @access  Private (Admin)
router.post('/save-changes', protect, async (req, res) => {
    try {
        await saveAndSync("Admin saved and backed up database changes via Admin UI");
        res.status(200).json({ success: true, message: 'Database changes saved to Git successfully!' });
    } catch (error) {
        console.error('Backup Error:', error);
        res.status(500).json({ success: false, error: 'Failed to save changes' });
    }
});

module.exports = router;
