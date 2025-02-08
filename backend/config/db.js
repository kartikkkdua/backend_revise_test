const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI; // Ensure env variable exists
        if (!MONGO_URI) {
            console.error("❌ MongoDB URI is missing. Check .env file.");
            process.exit(1);
        }

        const conn = await mongoose.connect(MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
