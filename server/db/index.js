const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    property_id: { type: mongoose.Types.ObjectId, ref: "Property" },
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
    email: { type: String, unique: true },
    password: String,
    profilePhoto: String,
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const User = mongoose.model("User", userSchema);
const Bookmark = mongoose.model("Bookmark", BookmarkSchema);
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
