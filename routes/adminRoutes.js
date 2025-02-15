const express = require('express');
const router = express.Router();
const User = require('../models/User');

/**
 * @route   GET /api/admin/users
 * @desc    Get all users (admin only)
 */
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Additional admin routes for enrollments can be added here

module.exports = router;
 
