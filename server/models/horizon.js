const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    "heroparag1": {
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Horizon', horizonSchema);