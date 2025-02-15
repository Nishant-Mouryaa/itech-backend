const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

/**
 * @route   GET /api/courses
 * @desc    Get all courses with optional filtering by category, search, and featured flag
 */
router.get('/', async (req, res) => {
  try {
    const query = {};

    // Filter by search term if provided (searches in the title field)
    if (req.query.search) {
      query.title = { $regex: req.query.search, $options: 'i' };
    }

    // Filter by category if provided
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by featured flag if provided
    if (req.query.featured === 'true') {
      query.featured = true;
    }

    // Optionally, you could add sorting here based on query.sort

    const courses = await Course.find(query);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   GET /api/courses/:id
 * @desc    Get course by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course)
      return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   POST /api/courses
 * @desc    Create a new course (admin only)
 */
router.post('/', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   PUT /api/courses/:id
 * @desc    Update a course
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourse)
      return res.status(404).json({ message: 'Course not found' });
    res.json(updatedCourse);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   DELETE /api/courses/:id
 * @desc    Delete a course
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse)
      return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
