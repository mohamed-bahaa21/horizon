const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const traineeSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    toLearn: {
        type: String
    }
})

module.exports = mongoose.model('Trainee', traineeSchema);