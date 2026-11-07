
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: String,
    location: String,
    phone: String,
    email: String,
    linkedin: String,
    github: String,
    portfolio: String,
    summary: String,

    education: [
        {
            qualification: String,
            institution: String,
            period: String,
            resultLabel: String,
            result: String
        }
    ],

    technicalSkills: [
        {
            category: String,
            items: String
        }
    ],

    certifications: [
        {
            title: String,
            points: [String]
        }
    ],

    projects: [
        {
            title: String,
            points: [String]
        }
    ],

    keySkills: [String],
    declaration: String
});

const Resume = mongoose.model(
    'Resume',
    resumeSchema,
    'resumes'
);

module.exports = Resume;
