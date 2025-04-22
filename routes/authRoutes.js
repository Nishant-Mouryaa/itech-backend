const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user and return a JWT token
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // 2. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      createdAt: new Date()
    });

    // 4. Save user to database
    const savedUser = await newUser.save();

    // 5. Create JWT token (auto-login after registration)
    const token = jwt.sign(
      { userId: savedUser._id, role: savedUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 6. Return token and user data (without password)
    const userData = { ...savedUser._doc };
    delete userData.password;

    res.status(201).json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return a JWT token
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
 
