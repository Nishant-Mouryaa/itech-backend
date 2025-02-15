const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

/**
 * @route   POST /api/orders/checkout
 * @desc    Create a new order upon checkout
 */
router.post('/checkout', async (req, res) => {
  try {
    const { userId, courses, totalAmount, paymentStatus } = req.body;
    const newOrder = new Order({
      user: userId,
      courses,
      totalAmount,
      paymentStatus
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   POST /api/orders/payment
 * @desc    Process payment (integrated with Razorpay in paymentController)
 */
router.post('/payment', async (req, res) => {
  // Payment logic is handled via paymentController in a real scenario.
  res.json({ message: 'Payment processed' });
});

module.exports = router;
 
