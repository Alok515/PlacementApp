import { Router} from 'express';
import routerAuth from './empolyee/index.js';
import  studentRouter  from './student/student.js';

const router = Router();

router.use('/emp', routerAuth);
router.use('/student', studentRouter);

router.get('/', (req, res) => {
    res.json({
        'msg': 'Hello from your server',
    });
})

export default router;