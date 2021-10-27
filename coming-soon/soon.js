require('dotenv').config({ path: 'config/.env' })
const path = require('path')
const fs = require('fs');
global.__basename = __dirname;

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const csrf = require('csurf')
const cors = require('cors')
const flash = require('connect-flash')

const app = express()

const MONGODB_URI = process.env.MONGODB_URI;
// connect session w/ mongodb
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});


// set ejs to be template view engine  
app.set('view engine', 'ejs')
const csrfProtection = csrf();
app.use(
    // Parsers for POST data
    express.json({
        limit: '10mb'
    }),
    express.urlencoded({
        extended: false,
        limit: '10mb'
    }),
    express.static(path.join(__dirname, 'public')),
    // setting session
    session({
        secret: '@010#44$vm=2001',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    cors(),
    flash(),

)
// routes
const horizonRoute = require('./routes/routes');

app.use('/', horizonRoute)

// connect database & server
let PORT = process.env.PORT || 5001;
if (process.env.NODE_ENV == "development") {
    mongoose
        .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(result => {
            app.listen(PORT);
            console.log(`MongoDB & Server is listening: ${PORT}`);
            console.log(process.env.NODE_ENV);
        })
        .catch(err => {
            console.log(err);
        });

} else {
    mongoose
        .connect(MONGODB_URI, {
            useNewUrlParser: true,
            ssl: true,
            sslValidate: false,
            sslCA: fs.readFileSync(path.resolve(__basename, 'config', 'rds-combined-ca-bundle.pem')),
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(result => {
            app.listen(PORT);
            console.log(`MongoDB & Server is listening: ${PORT}`);
            console.log(process.env.NODE_ENV);
        })
        .catch(err => {
            console.log(err);
        });
}