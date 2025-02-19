const express = require('express');
const Lecture = require('../models/Lecture');

const router = express.Router();

router.post('/', async (req, res) => {
  const { course, instructor, date } = req.body;

  const existingLecture = await Lecture.findOne({ instructor, date });
  if (existingLecture) {
    return res.status(400).json({ message: 'Instructor already has a lecture on this date' });
  }

  const lecture = new Lecture({ course, instructor, date });
  await lecture.save();
  res.status(201).json(lecture);
});

module.exports = router;
