require('dotenv').config();
const path = require('path');
global.__basename = __dirname;

const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const cors = require('cors');
const flash = require('connect-flash');

const app = express();

// set ejs to be template view engine  
app.set('view engine', 'ejs');

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
    }),
    cors(),
    flash(),
)
// routes
const horizonRoute = require('./routes/horizon');
const {
    Horizon
} = require('./models/horizon');

app.use('/', horizonRoute)

// connect database & server
let PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server is listening: ${PORT}`);