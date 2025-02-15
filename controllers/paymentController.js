const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * Creates a new Razorpay order
 */
exports.createOrder = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    receipt: 'receipt#1'
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Razorpay order creation failed' });
  }
};
 
