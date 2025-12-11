import express from 'express';
import { createInitialUser,loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/User', createInitialUser);

router.post('/login', loginUser);
export default router;