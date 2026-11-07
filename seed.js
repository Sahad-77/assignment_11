
require('dotenv').config();

const mongoose = require('mongoose');
const Resume = require('./models/Resume');
const resumeData = require('./data/resumeData');

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB Connected Successfully');

        await Resume.findOneAndUpdate(
            { email: resumeData.email },
            resumeData,
            {
                upsert: true,
                returnDocument: 'after',
                runValidators: true
            }
        );

        console.log('Resume data inserted/updated successfully!');

    } catch (error) {
        console.error('Error:', error.message);

    } finally {
        await mongoose.disconnect();
        console.log('MongoDB connection closed');
    }
}

seedDatabase();
