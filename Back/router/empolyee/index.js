import { Router} from 'express';
import passport from 'passport';
import signUp from '../../controller/employee/singUp.js';

const routerAuth = Router();

routerAuth.route('/signin').post( passport.authenticate('local',));

routerAuth.route('/signup').post( signUp);

export default routerAuth;