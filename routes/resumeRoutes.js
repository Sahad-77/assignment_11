
const express = require('express');
const router = express.Router();

const Resume = require('../models/Resume');

// GET resume data
router.get('/', async (req, res) => {
    try {
        const resume = await Resume.findOne();

        if (!resume) {
            return res.status(404).json({
                message: 'Resume data not found'
            });
        }

        res.status(200).json(resume);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching resume',
            error: error.message
        });
    }
});

module.exports = router;
