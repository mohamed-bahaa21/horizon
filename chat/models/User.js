const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chat = require("./Chat")

const UserSchema = new Schema({
    phone: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    chat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]
});
module.exports = mongoose.model("User", UserSchema);;
