const express = require('express');
const Course = require('../models/Course');

const router = express.Router();

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post('/', async (req, res) => {
  const { name, level, description, image } = req.body;
  const course = new Course({ name, level, description, image });
  await course.save();
  res.status(201).json(course);
});

module.exports = router;
