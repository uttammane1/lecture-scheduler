const express = require('express');
const Instructor = require('../models/Instructor');

const router = express.Router();

// Get all instructors
router.get('/', async (req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors);
});

// Add an instructor
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const instructor = new Instructor({ name, email });
  await instructor.save();
  res.status(201).json(instructor);
});

module.exports = router;
