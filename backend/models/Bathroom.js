const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BathroomSchema = new Schema({
    Name: String,
    Cooridinates: String,
    Comments:[
        {
        ref: 'Comment',
        //this is referencing the comment model
        type: mongoose.Schema.Types.ObjectId
        //this will say a particular id of a comment
        }
    ]
})

const Bathroom = mongoose.model('Bathroom', BathroomSchema)
module.exports = Bathroom