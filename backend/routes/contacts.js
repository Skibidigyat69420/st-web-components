const express = require('express');
const router = express.Router();
const { z } = require('zod');
const Lead = require('../models/Lead');
const { saveAndSync } = require('../utils/gitSync');

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters")
});

// @route   POST /api/contact
// @desc    Receive contact form submission and save as Lead
// @access  Public
router.post('/', async (req, res) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        // Save to database as a Lead
        const lead = await Lead.create({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || '',
            company: validatedData.company || '',
            message: validatedData.message,
            status: 'Pending'
        });

        await saveAndSync(`VCS [Leads]: New public lead submission from ${lead.email}`);

        console.log('New Lead Created:', lead.name, lead.email);

        res.status(200).json({
            success: true,
            message: 'Thank you for your interest! We will get back to you shortly.',
            data: lead
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.issues.map(issue => ({ field: issue.path[0], message: issue.message }))
            });
        }
        console.error('Contact route error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
