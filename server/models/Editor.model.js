const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EditorSchema = new Schema({
    "blocks": {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Editor', EditorSchema);