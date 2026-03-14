const Lead = require('../models/Lead');
const { Parser } = require('json2csv');
const { saveAndSync } = require('../utils/gitSync');

// @route   GET /api/leads
// @desc    Get all leads
// @access  Private (Admin)
exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort('-createdAt');
        res.status(200).json({ success: true, count: leads.length, data: leads });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   GET /api/leads/export
// @desc    Export leads to CSV
// @access  Private (Admin)
exports.exportLeads = async (req, res) => {
    try {
        const leads = await Lead.find().lean();

        if (leads.length === 0) {
            return res.status(400).json({ success: false, error: 'No leads to export' });
        }

        const fields = ['name', 'email', 'phone', 'company', 'message', 'status', 'createdAt'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(leads);

        res.header('Content-Type', 'text/csv');
        res.attachment('leads-export.csv');
        return res.send(csv);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   PUT /api/leads/:id
// @desc    Update lead status
// @access  Private (Admin)
exports.updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(req.params.id, { status: req.body.status }, {
            new: true,
            runValidators: true
        });

        if (!lead) {
            return res.status(404).json({ success: false, error: 'Lead not found' });
        }

        await saveAndSync(`VCS [Leads]: Admin updated status for lead ${lead.email} to ${req.body.status}`);

        res.status(200).json({ success: true, data: lead });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// @route   DELETE /api/leads/:id
// @desc    Delete lead
// @access  Private (Admin)
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ success: false, error: 'Lead not found' });
        }

        await lead.deleteOne();

        await saveAndSync(`VCS [Leads]: Admin deleted lead ${lead.email}`);

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
};
