const Instructor = require("../models/Instructor");
const Course = require("../models/Course");
const Lecture = require("../models/Lecture");

// ✅ Add Instructor
exports.addInstructor = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Check if instructor already exists
    const existingInstructor = await Instructor.findOne({ email });
    if (existingInstructor) {
      return res.status(400).json({ error: "Instructor already exists" });
    }

    // Create and save instructor
    const instructor = new Instructor({ name, email });
    await instructor.save();

    res.status(201).json({ message: "Instructor added successfully", instructor });
  } catch (error) {
    console.error("Error adding instructor:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

// ✅ Add Course
exports.addCourse = async (req, res) => {
  try {
    const { name, level, description, image } = req.body;

    // Validate input
    if (!name || !level) {
      return res.status(400).json({ error: "Course name and level are required" });
    }

    // Create and save course
    const course = new Course({ name, level, description, image });
    await course.save();

    res.status(201).json({ message: "Course added successfully", course });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

// ✅ Schedule Lecture
exports.scheduleLecture = async (req, res) => {
  try {
    const { courseId, instructorId, date } = req.body;

    // Validate input
    if (!courseId || !instructorId || !date) {
      return res.status(400).json({ error: "Course ID, Instructor ID, and Date are required" });
    }

    // Check if Course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Check if Instructor exists
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ error: "Instructor not found" });
    }

    // Prevent scheduling conflicts
    const existingLecture = await Lecture.findOne({ instructor: instructorId, date });
    if (existingLecture) {
      return res.status(400).json({ error: "Instructor already has a lecture on this date" });
    }

    // Create and save lecture
    const lecture = new Lecture({ course: courseId, instructor: instructorId, date });
    await lecture.save();

    res.status(201).json({ message: "Lecture scheduled successfully", lecture });
  } catch (error) {
    console.error("Error scheduling lecture:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};
