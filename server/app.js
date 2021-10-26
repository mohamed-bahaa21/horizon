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

// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
// const bcrypt = require("bcryptjs");

const app = express();

const horizonRoute = require('./routes/horizon.routes');

const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = process.env.MONGODB_URI;
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

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// const {
//     graphqlHTTP
// } = require('express-graphql')
// const {
//     buildSchema
// } = require('graphql')
// const schema = require('./schema/schema')
// const aschema = buildSchema(`
//     type Query {
//         horizon: Horizon!
//     }
//     type Horizon {
//         id: ID!
//         name: String!
//     }
// `)
// const rootValue = {
//     horizon: () => db
// }

// set ejs to be template view engine  
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://admin.horizon-lenses.com"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.enable('trust proxy');
// app.use(function (request, response, next) {
//     if (process.env.NODE_ENV != 'development' && !request.secure) {
//         return response.redirect("https://" + request.headers.host + request.url);
//     }
//     next();
// })

// Middleware
// require("./services/admin.passport.service")(passport);
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
    express.static(path.join(__dirname, 'public')),
    flash(),
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
        domain: 'admin.horizon-lenses.com',
        expires: expiryDate
    }),
    cookieParser("@010#44$vm=2001ayk2020horizon"),
    cors(),
    // passport.initialize(),
    // passport.session(),
    // function loggedIn(req, res, next) {
    //     if (req.user) {
    //         res.send('logged in');
    //     } else {
    //         res.send('not logged in');
    //     }
    // }
    // csrf(),
    // (req, res, next) => {
    //     var token = req.csrfToken();
    //     res.cookie('XSRF-TOKEN', token);
    //     res.locals.csrfToken = token;
    //     next()
    // },
)

// routes
app.use('/', horizonRoute);

// connect database & server
let PORT = 5000;
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
            sslCA: fs.readFileSync(path.resolve(__basename, 'config/rds-combined-ca-bundle.pem')),
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