const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    // Section 1/13
    "name": {
        type: String,
        required: false
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
// Section 2/13
    "prog_card_1_link": {
        type: String,
        required: false
    },
    "prog_card_1_img": {
        type: String,
        required: false
    },
    "prog_card_1_type": {
        type: String,
        required: false
    },
    "prog_card_1_header": {
        type: String,
        required: false
    },

    "prog_card_2_link": {
        type: String,
        required: false
    },
    "prog_card_2_img": {
        type: String,
        required: false
    },
    "prog_card_2_type": {
        type: String,
        required: false
    },
    "prog_card_2_header": {
        type: String,
        required: false
    },

    "prog_card_3_link": {
        type: String,
        required: false
    },
    "prog_card_3_img": {
        type: String,
        required: false
    },
    "prog_card_3_type": {
        type: String,
        required: false
    },
    "prog_card_3_header": {
        type: String,
        required: false
    },

    "prog_card_4_link": {
        type: String,
        required: false
    },
    "prog_card_4_img": {
        type: String,
        required: false
    },
    "prog_card_4_type": {
        type: String,
        required: false
    },
    "prog_card_4_header": {
        type: String,
        required: false
    },
    
})

module.exports = mongoose.model('Horizon', horizonSchema);