const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    // Section 1/13
    "name": {
        type: String,
        required: false
    },
    "date": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "summary": {
        type: String,
        required: true
    },
    "link": {
        type: String,
        required: true
    },
    "bg": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', BlogSchema);