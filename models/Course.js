const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    instructor: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);
 
