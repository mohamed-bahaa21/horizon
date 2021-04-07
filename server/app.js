require('dotenv').config()
const path = require('path')
global.__basename = __dirname;

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const csrf = require('csurf')
const flash = require('connect-flash')

const horizonRoute = require('./routes/horizon')

const app = express()

const MONGODB_URI = process.env.MONGODB_URI;
// connect session w/ mongodb
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
const csrfProtection = csrf();
// set ejs to be template view engine  
app.set('view engine', 'ejs')
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    express.static(path.join(__dirname, 'public')),
    // setting session
    session({
        secret: '123456',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    // using csrf protection
    csrfProtection,
    flash(),
    (req, res, next) => {
        res.locals.isLoggedIn = req.session.isLoggedIn;
        res.locals.csrfToken = req.csrfToken();
        next();
    }
)
// routes
app.use('/', horizonRoute)

// connect database & server
let PORT = process.env.PORT || 5000;
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(result => {
        app.listen(PORT);
        console.log(`MongoDB & Server is listening: ${PORT}`);
    })
    .catch(err => {
        console.log(err);
    });