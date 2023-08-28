import Student from '../../model/student/student.js';
import Interview from '../../model/interview/interview.js';

const addStudent = async (req, res) => {
    const student = req.body;
    const emp_id = req.params;
    student.emp_id = emp_id.id;
    console.log(student);
    try {
        const newStudent = await Student.addNewStudent(student);
        if (newStudent) {
            return res.status(201).json(newStudent);
        }
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getStudent = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const students = await Student.find({emp_id: id});
        if (students) {
            return res.status(200).json(students);
        }
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const addInterview = async (req, res) => {
    const interview = req.body;
    const emp_id = req.params;
    interview.emp_id = emp_id.id;
    console.log(interview);
    try {
        const newInterview = await Interview.addInterview(interview);
        if (newInterview) {
            return res.status(201).json(newInterview);
        }
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getInterview = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const interviews = await Interview.find({emp_id: id});
        if (interviews) {
            return res.status(200).json(interviews);
        }
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const student = {
    addStudent,
    addInterview,
    getStudent,
    getInterview,
}

export default student;