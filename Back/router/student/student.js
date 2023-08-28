import { Router } from 'express';
import checkAuth from '../../middleware/checkAuth.js';
import student from '../../controller/student/studentHandler.js';

const router = new Router();

router.use(checkAuth);

router.route('/addstudent/:id').post(student.addStudent);
router.route('/addinterview/:id').post(student.addInterview);
router.route('/getstudent/:id').get(student.getStudent);
router.route('/getinterview/:id').get(student.getInterview);

export default router;