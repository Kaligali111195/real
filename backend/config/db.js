const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);  // Removed deprecated options
        console.log("MongoDB Connected Successfully!");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err.message);
        process.exit(1);  // Exit the process if connection fails
    }
};

module.exports = connectDB;
