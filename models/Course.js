const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    instructor: { type: String, required: true },
    category: { type: String, required: true }, // e.g., "web", "mobile", "data", etc.
    icon: { type: String }, // URL or path to a language or course icon/logo
    image: { type: String } // URL or path to a banner/cover image
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);
