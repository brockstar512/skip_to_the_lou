const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  Name:String,
  

})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment