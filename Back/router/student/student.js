import { Router } from 'express';
import checkAuth from '../../middleware/checkAuth.js';

const router = new Router();

router.use(checkAuth);

router.get('/', (req, res) => {
    res.json({'name': "Login success"});
})

export default router;