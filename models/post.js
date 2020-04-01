const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    description: String,
    imageUrl: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

    // Then an id to the recipe can go here perhaps
})

module.exports = mongoose.model('Post', postSchema)