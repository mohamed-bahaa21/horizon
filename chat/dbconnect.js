const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const dev_url = process.env.MONGODB_LOCAL;
const prod_url = process.env.MONGODB_PROD;

const connect = mongoose.connect(prod_url, { useNewUrlParser: true });

module.exports = connect;
