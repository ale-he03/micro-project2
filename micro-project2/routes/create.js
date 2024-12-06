import express from "express";

import Student from "../models/student.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const { student_id, name, email, course, age } = req.body;

    if (!student_id || !name || !email || !course || !age) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newStudent = new Student({
      student_id,
      name,
      email,
      course,
      age,
    });

    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json("LUL! an ERROR occurred: " + error.message);
  }
});

// ES6 module "export": To export the router so it can be used in the main app
export default router;
// export router;
