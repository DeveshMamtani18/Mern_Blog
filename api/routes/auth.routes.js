import express from 'express'
import { signup,signin,google } from '../controllers/auth.control.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/google",google)
router.post("/signin",signin)

export default router