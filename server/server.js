import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import util from 'util';
import helmet from 'helmet';
import morgan from 'morgan';
import axios from 'axios';
import path from 'path';
import cloudinary from 'cloudinary';
import { fileURLToPath } from 'url';
//import authRoutes from './routes/auth.js';
//import userRoutes from './routes/users.js';
//import postRoutes from './routes/posts.js';
import Image from './models/Image.js';
import authRoutes from './routes/auth.js';

//Configurations
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})
const jsonParser = bodyParser.json();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.static('public'));

// File Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post(
  '/auth/upload/:genre',
  upload.array('file', 200),
  function (req, res, next) {
    const genre = req.params;
    console.log(genre.genre);
    const filename = req.files[0].originalname;
    const newImage = new Image({
      imagePath: filename,
      genre: genre.genre,
    });
    newImage.save();

    res.status(201).json({ message: 'pls work bb' });
  }
);

// Routes
app.use('/auth', jsonParser, authRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  })
  .catch((error) => console.log(`${error}, did not connect`));
