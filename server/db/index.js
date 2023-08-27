const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    username: String,
    email:String,
    password: String,
    profileimage:String
    // purchased: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
})

const User = mongoose.model('User', userSchema);

const porpertySchema = new mongoose.Schema ({
    type: String,
    description: String,
    price: Number,
    imageLink: String,
    location:String,
    shortlink:String,
    avialability: Boolean,
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Property = mongoose.model('Admin', porpertySchema);
console.log("corret");

module.exports = {
    User,
    Property
  }