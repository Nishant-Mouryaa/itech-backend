const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userAvatar: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true }
});

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String } // Format: "MM:SS"
});

const CurriculumSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [LessonSchema]
});

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    discount: { type: Number, min: 0, max: 100 },
    instructor: { type: String, required: true },
    instructorAvatar: { type: String },
    instructorTitle: { type: String },
    instructorBio: { type: String },
    instructorRating: { type: Number, min: 0, max: 5 },
    instructorReviews: { type: Number, default: 0 },
    instructorStudents: { type: Number, default: 0 },
    instructorCourses: { type: Number, default: 0 },
    category: { 
      type: String, 
      required: true,
      enum: ['web', 'mobile', 'data', 'cloud', 'cybersecurity', 'business', 'design']
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner'
    },
    duration: { type: String }, // e.g., "15 hours"
    lessonsCount: { type: Number, default: 0 },
    videoHours: { type: Number, default: 0 },
    resourcesCount: { type: Number, default: 0 },
    students: { type: Number, default: 0 },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    icon: { type: String },
    image: { type: String, required: true },
    previewVideo: { type: String },
    learningOutcomes: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    curriculum: [CurriculumSectionSchema],
    reviews: [ReviewSchema],
    isFeatured: { type: Boolean, default: false },
    tags: { type: [String], default: [] }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for formatted price
CourseSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toFixed(2)}`;
});

// Virtual for discount calculation
CourseSchema.virtual('discountPrice').get(function() {
  if (this.originalPrice && this.discount) {
    return this.originalPrice * (1 - this.discount/100);
  }
  return null;
});

// Virtual for duration in minutes
CourseSchema.virtual('durationMinutes').get(function() {
  if (!this.duration) return 0;
  const hours = parseFloat(this.duration.split(' ')[0]);
  return Math.round(hours * 60);
});

module.exports = mongoose.model('Course', CourseSchema);