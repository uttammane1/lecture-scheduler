const express = require('express');
const Instructor = require('../models/Instructor');

const router = express.Router();

// GET all instructors
router.get('/', async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// POST a new instructor
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newInstructor = new Instructor({ name, email });
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(500).json({ message: "Error creating instructor", error });
  }
});

module.exports = router;
