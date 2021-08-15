require('dotenv').config({ path: 'config/dev.env' })
const path = require('path')
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

const app = express();

const horizonRoute = require('./routes/horizon.routes');
const { Horizon } = require('./models/horizon');

const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = process.env.MONGODB_URI;
// connect session w/ mongodb
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

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
//     res.header("Access-Control-Allow-Origin", "https://admin.horizon.aykmall.net"); // update to match the domain you will make the request from
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

app.set('view engine', 'ejs');

app.use(
    // Parsers for POST data
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    compression(),
    helmet(),
    cookieParser(),
    cors(),
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
        secret: '@010#44$vm=2001ayk2020horizon',
        name: 'sessionId',
        resave: false,
        saveUninitialized: false,
        store: store,
        path: '/',
        httpOnly: false,
        secure: true,
        domain: 'aykmall.net',
        expires: expiryDate
    }),
    csrf(),
    flash()
)

// routes
app.use('/', horizonRoute)

// connect database & server
let PORT = 5000;
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(result => {
        app.listen(PORT);
        console.log(`MongoDB & Server is listening: ${PORT}`);
        console.log(process.env.NODE_ENV);
    })
    .catch(err => {
        console.log(err);
    });
