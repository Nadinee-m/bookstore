const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: String, },  ///edit
    size: {
      type: Number,
      trim: true
    },  //edit
    color: { type: String },
    
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
);



const Post = mongoose.model('Post', postSchema)
module.exports = Post