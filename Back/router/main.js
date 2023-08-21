import { Router} from 'express';
import routerAuth from './empolyee/index.js';

const router = Router();

router.use('/emp', routerAuth);

router.get('/', (req, res) => {
    res.json({
        'msg': 'Hello from your server',
    });
})

export default router;