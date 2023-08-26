import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

employeeSchema.statics.signup = async function (name, email, password ) {
    if ( !email  || !password || !name) {
        throw Error('All fields must be provided');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email');
    }

    const emp = await this.findOne({ email});
    if (emp) {
        throw Error("Employee already exists with that email address");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const employee = await this.create({
        name: name,
        email: email,
        password: hashPassword,
    });
    return employee;
}

employeeSchema.statics.signin = async function (email, password) {
    if (!email|| !password) {
        throw Error('All fields must be provided');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email');
    }
    const employee = await this.findOne({ email});
    if (!employee) {
        throw Error('Employee Does Not Exist with this email address'); 
    }
    const match = await bcrypt.compare(password, employee.password);
    if (!match) {
        throw Error('Invalid password');
    }
    return employee;
}

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;