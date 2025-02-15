const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    courses: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
 
