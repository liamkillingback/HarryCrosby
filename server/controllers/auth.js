import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Image from '../models/Image.js';
import cloudinary from 'cloudinary';

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
  if (req.body.genre === 'all') {
    const image = await Image.find();
    res.status(200).json(image);
  }
  else {
    console.log(req.body.genre);
    const image = await Image.find({ genre: req.body.genre });
    res.status(200).json(image);
  }
  
};

export const add_images = (req, res) => {
  const image = new Image({
    imagePath: req.body.url,
    genre: req.body.tags[0],
    public_id: req.body.public_id,
    signature: req.body.signature
  })
  image.save();
}

export const delete_image = async (req, res) => {
  //Recieve image params from req
  const _id = req.body._id;
  const image = await Image.findOne({ _id: _id });
  await Image.deleteOne({ _id: _id });
  cloudinary.v2.uploader.destroy(image.public_id, image.signature).then(res => console.log(res));
  res.status(200).json({message: 'successfully deleted image from database'})
  
  
}