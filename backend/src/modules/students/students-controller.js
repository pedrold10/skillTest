const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents();

    res.status(200).json({
        success: true,
        data: students,
    });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const studentData = req.body;

    if (!studentData || Object.keys(studentData).length === 0) {
        res.status(400);
        throw new Error("Student data is required");
    }

    const newStudent = await addNewStudent(studentData);

    res.status(201).json({
        success: true,
        data: newStudent,
    });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
