const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const waitlistSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    toLearn: {
        type: String
    }
})

module.exports = mongoose.model('Waitlist', waitlistSchema);