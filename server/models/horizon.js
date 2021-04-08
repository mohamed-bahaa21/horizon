const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    "hero_parag_1": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Horizon', horizonSchema);