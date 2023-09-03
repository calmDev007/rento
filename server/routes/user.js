
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
  

  // router.get("/bookmarks", authenticateJwt, async (req, res) => {
  //   try {
  //     // Assuming req.user is an instance of the User model
  //     const user = await req.user.populate('bookmarks').execPopulate(); 
  
  //     res.status(200).json({ bookmarks: user.bookmarks });
  //   } catch (error) {
  //     console.error('An error occurred while retrieving bookmarks:', error);
  //     res.status(500).json({ message: 'An internal server error occurred' });
  //   }
  // });
  
  
  // POST route to add/remove a property from user's bookmarks
  // router.post("/bookmarks/:propertyId", authenticateJwt, async (req, res) => {
  //   try {
  //     const { propertyId } = req.params;
  //     const user = req.user;
  
  //     // Check if the property exists
  //     const property = await Property.findById(propertyId);
  //     if (!property) {
  //       return res.status(404).json({ message: 'Property not found' });
  //     }
  
  //     // Check if the property is already bookmarked by the user
  //     const isBookmarked = user.bookmarks.includes(propertyId);
  
  //     if (isBookmarked) {
  //       // Remove the property from bookmarks
  //       user.bookmarks.pull(propertyId);
  //     } else {
  //       // Add the property to bookmarks
  //       user.bookmarks.push(propertyId);
  //     }
  
  //     await user.save();
  
  //     res.status(200).json({ message: 'Bookmark updated successfully' });
  //   } catch (error) {
  //     console.error('An error occurred during bookmark update:', error);
  //     res.status(500).json({ message: 'An internal server error occurred' });
  //   }
  // });


  router.post("/bookmarks", authenticateJwt, async (req, res) => {
    const { _id } = req.user;
    const { prodid } = req.body;
    console.log(_id, prodid);
  
    try {
      const user = await User.findOne({ _id: _id });
  
      if (!user) {
        res.status(404).send({
          message: 'User not found',
        });
        return;
      }
  
      user.bookmarks.push(...prodid);
  
      await user.save();
  
      res.status(201).send({
        message: 'Property added to bookmarks successfully',
      });
    } catch (error) {
      console.error('Error from main try-catch block:', error);
      res.status(500).send({
        message: 'Internal server error',
      });
    }
  });
  

  

  module.exports = router;