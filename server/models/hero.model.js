const mongoose = require('mongoose')
const Schema = mongoose.Schema

const heroSchema = new Schema({
    parag: String
})

module.exports = mongoose.model('Hero', heroSchema)