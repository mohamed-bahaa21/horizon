const path = require('path');
const express = require('express');
const route = express.Router();

const userRoute = require('./user.routes');
const apiRoute = require('./api.routes');
const JsonHtmlParserRoute = require('./json_html_parser.routes');


// GLOBAL HEADER CONTROLLER
route.get('/*', function (req, res, next) {
    res.header('Content-Security-Policy', "img-src self http://pngimg.com/uploads/glasses https://firebasestorage.googleapis.com https://via.placeholder.com");
    res.header('Content-Security-Policy', "script-src self https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js");
    res.header('Content-Security-Policy', "frame-src self https://www.google.com/ https://www.youtube.com/ https://youtube.com/");
    next();
});

route.use('/', userRoute);
route.use('/api', apiRoute);
route.use('/parser', JsonHtmlParserRoute);

module.exports = route;