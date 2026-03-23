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
    const { id } = req.params;
    const studentData = req.body;

    if (!studentData || Object.keys(studentData).length === 0) {
        res.status(400);
        throw new Error("Student data is required");
    }

    const updatedStudent = await updateStudent(id, studentData);

    if (!updatedStudent) {
        res.status(404);
        throw new Error("Student not found");
    }

    res.status(200).json({
        success: true,
        data: updatedStudent,
    });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const student = await getStudentDetail(id);

    if (!student) {
        res.status(404);
        throw new Error("Student not found");
    }

    res.status(200).json({
        success: true,
        data: student,
    });
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
