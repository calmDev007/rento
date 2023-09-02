
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
  
  router.get("/bookmarks", authenticateJwt, async (req, res) => {
    try {
      const bookmarks = await Bookmark.find({ user_id: req.user.id });
      if(!bookmarks) {
        return res.status(401).send({
          success: false,
          message: "bookmark not found"
        })
      }
      const UserBookmarks = await Bookmark.find({ property_id: req.body.property_id });
    } catch (error) {
      console.error('An error occurred in /bookmarks route:', error);
      res.status(500).json({ message: 'An internal server error occurred' });
    }
  });
  
  
  router.post("/bookmarks", authenticateJwt,async (req, res) => {
    const bookmark = new Bookmark({
      user_id: req.user.id,
      property_id: req.body.property_id,
    });
    await bookmark.save();
    res.status(200).send({
      success: true,
      message: "bookmark added"
    });
  });

  module.exports = router;