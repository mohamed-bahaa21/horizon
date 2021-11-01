const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: Number,
        expires: '1d'
    },
    otp_MessageId: {
        type: String
    },
    chat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]
});
module.exports = mongoose.model("User", UserSchema);;
