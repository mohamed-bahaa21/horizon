require('dotenv').config();
const env = process.env;
module.exports = {
    mongoConnectionString: `${env.MONGODB}`
}