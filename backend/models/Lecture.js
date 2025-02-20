const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Lecture", LectureSchema);
