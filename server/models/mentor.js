const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },

    password: {
        type: String
    },
    confirmToken: {
        type: String
    },
    confirmTokenExpiration: {
        type: Date
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Mentor', mentorSchema);