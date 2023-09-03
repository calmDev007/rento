
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
      res.json(posts);
    } catch (error) {
      console.error('An error occurred in /posts route:', error);
      res.status(500).json({ message: 'An internal server error occurred' });
    }
  });

  router.post('/add', async (req, res) => {
    try {
      const { title, url } = req.body;
      const newBookmark = new Bookmark({ title, url });
      await newBookmark.save();
      // res.redirect('/bookmarks');
      res.json({
        "message":"true"
      }).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error adding bookmark');
    }
  });
  
  // List bookmarks
  router.get('/bookmarks', async (req, res) => {
    try {
      const bookmarks = await Bookmark.find();
      res.send(bookmarks).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error fetching bookmarks: ${err.message}`);
    }
  });
  
  // Delete a bookmark
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
  

  

  module.exports = router;