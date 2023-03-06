import express from 'express';
import { login, register, get_images, add_images, delete_image } from '../controllers/auth.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/gallery_images', get_images);
router.post('/add_images', add_images);
router.delete('/delete_img', delete_image)

export default router;
