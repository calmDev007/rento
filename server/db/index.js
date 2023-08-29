const mongoose = require("mongoose");

// const BookmarkSchema = new mongoose.Schema({
//     propertyRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
//     authorRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
// });

// const PostSchema = new mongoose.Schema({
//     propertyRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
//     authorRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
// });

// const PurchasedSchema = new mongoose.Schema({
//     propertyRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
//     authorRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
// });


const userSchema = new mongoose.Schema ({
    username: String,
    email:String,
    password: String,
    profilePhoto:String,
    // purchased: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
}) 

// User.add(BookmarkSchema).add(PostSchema).add(PurchasedSchema);


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