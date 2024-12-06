import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    student_id: {
        type: String,
        unique: true,
        require: [true, 'Student ID is requires']
    },
    name: {
        type: String,
        required: [true, 'Student Name is required'],
        // Optional Validation: name length at least 3 characters:
        minlength: [3, 'Employee Name must be at least 3 characters long'],
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        unique: true, // Optional (if email uniqueness is needed)
    },
     course: {
        type: String,
        required: [true, 'Current course is required'],
        // Optional:  Enum to ensure the title is within these listed values:
        enum: ['Highschool', 'Elementary', 'school', 'pre-school'],
    },
    age: {
        type: Number,
        // just simple validation without adding a custom message (we should):
        required: true,
        // or with descriptive custom message:
        // required: [true, 'Age is required'],
        // age validation1 (Important): is greater than or equal to 19:
        min: [5, 'Student age must be at least 5 or above'],
        // age validation2 (Optional): is within a reasonable range:
        max: [21, 'Student age must be below 21!'],
    },
})

const Student = mongoose.model('Student', studentSchema);

export default Student;