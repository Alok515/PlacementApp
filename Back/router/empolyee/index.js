import { Router} from 'express';
import emp from '../../controller/employee/empAuth.js';

const routerAuth = Router();

routerAuth.route('/signin').post( emp.signIn);

routerAuth.route('/signup').post( emp.singUp);

export default routerAuth;