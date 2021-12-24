require('dotenv').config({ path: 'config/.env' })
const path = require('path')
const fs = require('fs');
global.__basename = __dirname;

const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const csrf = require('csurf')
const cors = require('cors');
const flash = require('connect-flash');

const rTracer = require('cls-rtracer');
const Logger = require('./services/logger.service');
const logger = new Logger('App');

const apicache = require('apicache');
let cache = apicache.options({
    trackPerformance: true
}).middleware;

const app = express();
const horizonRoute = require('./routes/horizon.routes');

let LOCAL_STATIC_FILES_DIR = path.join(__dirname, 'public');
let S3_STATIC_FILES_DIR = '';

const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = process.env.MONGODB_URI;
const LOCAL_MONGODB_URI = process.env.LOCAL_MONGODB_URI;
// connect session w/ mongodb
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

var corsWhiteList = ['http://localhost:3000', 'https://admin.horizon-lenses.com', 'https://admin2.horizon-lenses.com'] // allow to server to accept request from different origin
var corsOptions = {
    origin: function (origin, callback) {
        if (corsWhiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
}


// Middleware
app.set('view engine', 'ejs');
app.use(
    // Parsers for POST data
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    express.json({
        limit: '10mb'
    }),
    express.urlencoded({
        extended: true,
        limit: '10mb'
    }),
    // express.static(LOCAL_STATIC_FILES_DIR),
    compression(),
    helmet(),
    session({
        secret: '@010#44$vm=2001ayk2020horizon',
        name: 'sessionId',
        resave: true,
        saveUninitialized: true,
        store: store,
        path: '/',
        httpOnly: false,
        secure: true,
        domain: 'beta.horizon-lenses.com',
        expires: expiryDate
    }),
    cookieParser("@010#44$vm=2001ayk2020horizon"),
    cors(),
    flash(),
    rTracer.expressMiddleware(),
    cache('1 day')
)

// routes
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    if (res.statusCode == 200 || res.statusCode == 203) {
        logger.info(`GET URL: ${fullUrl}`);
    } else {
        logger.error(`GET URL: ${fullUrl}`);
    }
    next();
})
app.use('/', horizonRoute);

// connect database & server
let PORT = 5000;
if (process.env.NODE_ENV == "development") {
    apicache.clear();
    mongoose
        .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(result => {
            app.listen(PORT);
            logger.info(`MongoDB & Server is listening: ${PORT}`, { 'process.env.NODE_ENV': process.env.NODE_ENV })
            // console.log(`MongoDB & Server is listening: ${PORT}`);
            // console.log(process.env.NODE_ENV);
        })
        .catch(err => {
            logger.error(err);
            // console.log(err);
        });

} else {
    apicache.clear()
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
            // console.log(`MongoDB & Server is listening: ${PORT}`);
            // console.log(process.env.NODE_ENV);
        })
        .catch(err => {
            logger.error(err);
            // console.log(err);
        });
}