const jwt = require("jsonwebtoken");
const express = require('express');
const { User } = require("../db");
const { authenticateJwt, SECRET } = require("../middleware/"); 

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password , profilePhoto , email } = req.body;
  const user = await User.findOne({ email , password });
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const newUser = new User({ username, password , profilePhoto , email});
    await newUser.save();
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token ,newUser });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email , password });

    if (!user) {

      return res.status(401).send({
        success: false,
        message: "Invalid credentials"
      })
     
    } 

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
    res.status(201).send({
      message: "Signed In successfully",
      token,
      success: true,
    })
    
  } catch (error) {
    res.status(403).json({ message: 'An error occurred' });
  }
});

router.get('/me', authenticateJwt, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.find({ _id : userid });

    if (user) {
      res.json({ user });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;