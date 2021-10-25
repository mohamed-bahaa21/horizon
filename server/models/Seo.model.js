const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SeoSchema = new Schema({
    "page_title": {
        type: Boolean,
        required: true
    },
    "page_desc": {
        type: String,
        required: true
    },
    "page_robots": {
        type: String,
        required: true
    },

    "og_site_name": {
        type: String,
        required: true
    },
    "og_title": {
        type: String,
        required: true
    },
    "og_description": {
        type: String,
        required: true
    },
    "og_image": {
        type: String,
        required: true
    },
    "og_url": {
        type: String,
        required: true
    },

    "twitter_card": {
        type: String,
        required: true
    },
    "twitter_image_alt": {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Seo', SeoSchema);