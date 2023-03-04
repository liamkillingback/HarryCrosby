import express from 'express';
import { login, register, get_images} from '../controllers/auth.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/gallery_images', get_images);


export default router;
