const express = require("express");
const { addInstructor, addCourse, scheduleLecture } = require("../controllers/adminController");

const router = express.Router();

router.post("/add-instructor", addInstructor);
router.post("/add-course", addCourse);
router.post("/schedule-lecture", scheduleLecture);

module.exports = router;
