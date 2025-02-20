const Instructor = require("../models/Instructor");
const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

exports.addInstructor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const instructor = new Instructor({ name, email });
    await instructor.save();
    res.status(201).json({ message: "Instructor added", instructor });
  } catch (error) {
    res.status(500).json({ error: "Error adding instructor" });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const { name, level, description, image } = req.body;
    const course = new Course({ name, level, description, image });
    await course.save();
    res.status(201).json({ message: "Course added", course });
  } catch (error) {
    res.status(500).json({ error: "Error adding course" });
  }
};

exports.scheduleLecture = async (req, res) => {
  try {
    const { courseId, instructorId, date } = req.body;

    const existingLecture = await Lecture.findOne({ instructor: instructorId, date });
    if (existingLecture) {
      return res.status(400).json({ error: "Instructor already has a lecture on this date" });
    }

    const lecture = new Lecture({ course: courseId, instructor: instructorId, date });
    await lecture.save();
    res.status(201).json({ message: "Lecture scheduled", lecture });
  } catch (error) {
    res.status(500).json({ error: "Error scheduling lecture" });
  }
};
