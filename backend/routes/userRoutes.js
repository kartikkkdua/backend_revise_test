const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create User
router.post('/add', async (req, res) => {
    try {
        const { name, age, phone } = req.body;
        const newUser = new User({ name, age, phone });
        await newUser.save();
        res.status(201).json({ message: "User saved successfully", newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
