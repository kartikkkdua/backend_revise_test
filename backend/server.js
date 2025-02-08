require('dotenv').config(); // Load .env first

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import MongoDB connection
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5008;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
connectDB(); // Ensure this runs properly

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
