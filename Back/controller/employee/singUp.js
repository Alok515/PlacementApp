import Employee from '../../model/employee.js';
import bcrypt from 'bcryptjs';

const singUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const employee = await Employee.findOne({ email: email});
        if (!employee) {
            const hash = await bcrypt.hash(password, 10);
            const saveFlag = await Employee.create({
                name: name,
                email: email,
                password: hash
            });
            if (saveFlag) {
                return res.json({ 
                    status: 'success',
                    message: "Successfully created employee",
                });
            }
            else {
                return res.json({
                    status: 'error',
                    message: "Error creating employee",
                });
            }
        }
        else {
            return res.json({
                status: 'error',
                message: "Employee alredy exist",
            });
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default singUp;