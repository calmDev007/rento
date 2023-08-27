
const jwt = require("jsonwebtoken");
const express = require('express');
const { User } = require("../db");
const { authenticateJwt, SECRET } = require("../middleware/"); 

const router = express.Router();

router.get('/bookmarks' , (req , res)=>{

    

})