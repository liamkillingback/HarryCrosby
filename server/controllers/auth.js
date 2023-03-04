import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Image from '../models/Image.js';

export const register = async (req, res) => {
  console.log("i was here");
  console.log(req.body);
    try {
        const {
            username,
            password
        } = req.body;

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      console.log(passwordHash);


        const newUser = new User({
            username,
            password: passwordHash
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
      console.log(error);
        res.status(500).json({ error: error.message })
    }

};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username: username });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    const isAdmin = user.isAdmin;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user, isAdmin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const get_images = async (req, res) => {
  try {
    if (req.body.genre === 'birds') {
      const image = await Image.find({ genre: 'birds' });
      res.status(200).json(image);
    }
    else if (req.body.genre === 'people') {
      const image = await Image.find({ genre: 'people' });
      res.status(200).json(image);
    }
    else if (req.body.genre === 'misc') {
      const image = await Image.find({ genre: 'misc' });
      res.status(200).json(image);
      }
    else {
      const image = await Image.find();
      res.status(200).json(image);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
  
};
