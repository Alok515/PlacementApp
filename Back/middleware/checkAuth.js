import jwt from 'jsonwebtoken';
import Employee from '../model/employee.js';

const checkAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if( !authorization ) {
        return res.status(401).json({ error: 'Token required' });
    }
    try {
        const token = JSON.parse(authorization);
        const { _id } = jwt.verify(token, process.env.JSECRET);
        req.emp = await Employee.findOne({ _id }).select(_id);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: 'Invalid authorization' });
    }
}

export default checkAuth;