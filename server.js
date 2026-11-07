
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();

app.use(express.json());

// Resume API
app.use('/api/resume', resumeRoutes);

// Start server
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error('Server startup failed:', error.message);
    }
}

startServer();
