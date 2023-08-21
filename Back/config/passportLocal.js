import passport from 'passport';
import Employee from '../model/employee.js';
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local';

passport.use(new passportLocal.Strategy(
    {
        usernameFeild: 'email',
    },
    async (email, password, done) => {
        try {
            const employee = await Employee.findOne(email);
            if (employee) {
                const compare = await bcrypt.compare(password, employee.password);
                if (compare) {
                    return done(null, employee, { success: 'Login successful'});
                }
                else {
                    return done(null, false, {message: 'Password mismatch Please try again'});
                }
            }
            else {
                return done(null, false, {message: 'No Employee found with this email id'});
            }
        } catch (error) {
            console.log(error);
            return done(null, false, {message: error});
        }
    }
));

export default passport;