import { Router } from "express";
import { authenticateUser } from '../middleware/authenticate.js';

const router = Router();

router.get('/', authenticateUser, (req, res) => {
    res.json({
        success: true,
        message: 'Auth passed',
        userId: req.user.id
    })
})

export default router;