
const jwt = require("jsonwebtoken");
const express = require('express');
const { User, Property, Bookmark, Post, Purchased } = require("../db");
const { authenticateJwt, SECRET } = require("../middleware/"); 

const router = express.Router();

router.post("/properties", authenticateJwt,async (req, res) => {
    try{  
    const property = new Property({
            type: req.body.type,
            description: req.body.description, 
            price: req.body.price, 
            imageLink: req.body.imageLink, 
            location: req.body.location, 
            shortlink: req.body.shortlink, 
            avialability: req.body.avialability, 
            author: req.user.id,
    });
    await property.save();
    res.status(200).send({
        success: true,
        message: "property created"
      });
    }catch (error) {
        console.error('An error occurred in /property route:', error);
        res.status(500).json({ message: 'An internal server error occurred' });
      }
  });

  router.get("/posts", authenticateJwt, async (req, res) => {
    try {
      const user = req.user;
      const posts = await Property.find({
        author: req.user.id, 
      });
      console.log(req.user.id);
      res.json(posts);
    } catch (error) {
      console.error('An error occurred in /posts route:', error);
      res.status(500).json({ message: 'An internal server error occurred' });
    }
  });

  router.post('/add', authenticateJwt, async (req, res) => {
    try {
      const Username = req.user.username;
  
      // Find the user based on their username
      const user = await User.findOne({ Username });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Create a new bookmark document
      const newBookmark = new Bookmark({
        title: req.body.title,
        url: req.body.url,
        author: user._id,
      });
  
      // Save the new bookmark to the database
      await newBookmark.save();
  
      res.status(201).json({
        message: 'Bookmark added successfully',
        id: newBookmark._id,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error adding bookmark' });
    }
  });
  
  router.get('/bookmarks', authenticateJwt, async (req, res) => {
    try {
      const Username = req.user.username;
      console.log(Username);
  
      // Find the user based on their username
      const user = await User.findOne({ Username });
  
      if (!user) {
        return res.status(404).json({ message: "User not found", id: Username });
      }
  
      // Find bookmarks and populate the 'author' field with user data
      const bookmarksOfUser = await Bookmark.find({ author: user._id }).populate('author');
  
      if (bookmarksOfUser.length === 0) {
        return res.status(404).json({ message: "User has no bookmarks" });
      }
  
      res.status(200).json(bookmarksOfUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Error fetching bookmarks: ${err.message}` });
    }
  });
  
  router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Bookmark.findByIdAndDelete(id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error deleting bookmark' });
    }
  });

  router.get('/getuserid', authenticateJwt, async (req, res) => {
    try {
      const username = req.user.username;
      console.log(username);
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      res.status(200).json({
        success: true,
        message: 'User ID retrieved successfully',
        id: user._id,
      });
    } catch (e) {
      console.error('Error:', e);
      res.status(500).json({
        error: 'An error occurred while processing the request',
      });
    }
  });
  
  

  

  module.exports = router;