const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const validPassword = await user.comparePassword(password);
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

exports.profile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
