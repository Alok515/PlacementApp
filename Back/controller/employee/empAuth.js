import Employee from '../../model/employee.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign(
        {_id},
        process.env.JSECRET,
        { expiresIn: '3d'}
    )
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const val = await Employee.signin( email, password);
        const token = createToken(val._id);
        return res.status(200).json({ email: val.email, token: token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const singUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const val = await Employee.signup(name, email, password);
        const token = createToken(val._id);
        return res.status(201).json({ email: val.email, token: token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const empAuth = {
    signIn,
    singUp
};

export default empAuth;