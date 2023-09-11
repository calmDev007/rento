const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
      required:true
     },
  });
  
const PostSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    property_id: { type: mongoose.Types.ObjectId, ref: "Property" },
});

const PurchasedSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    property_id: { type: mongoose.Types.ObjectId, ref: "Property" },
});

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true, required: true },
    password: String,
    profilePhoto: String,
});

const User = mongoose.model("User", userSchema);
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
const Post = mongoose.model("Post", PostSchema);
const Purchased = mongoose.model("Purchased", PurchasedSchema);

const propertySchema = new mongoose.Schema({
    type: String,
    description: String,
    price: Number,
    imageLink: String,
    location: String,
    shortlink: String,
    avialability: Boolean,
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });  

const Property = mongoose.model("Property", propertySchema);
console.log("from db");

module.exports = {
    User,
    Property,
    Bookmark,
    Post,
    Purchased
};
