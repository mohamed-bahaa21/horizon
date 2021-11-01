const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
    otp: {
        type: Number
    },
    valid: {
        type: Boolean,
        expires: '3h'
    },
});
module.exports = mongoose.model("Otp", OtpSchema);;
