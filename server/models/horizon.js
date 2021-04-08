const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "hero_header_1": {
        type: String,
        required: true
    },
    "hero_parag_1": {
        type: String,
        required: true
    },
    "hero_parag_2": {
        type: String,
        required: true
    },
    "hero_link_1_name": {
        type: String,
        required: true
    },
    "hero_link_1_href": {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Horizon', horizonSchema);