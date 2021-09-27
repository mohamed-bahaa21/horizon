const path = require('path');
const express = require('express');
const route = express.Router();

const userCtrl = require(path.resolve(__basename, 'controllers', 'user.controllers'));

// USER_PAGES
route.get('/', userCtrl.getLanding);
route.get('/coming-soon', userCtrl.getComingSoon)

route.get('/about-us', userCtrl.getAbout);
route.get('/news', userCtrl.getBlogs);
route.get('/blog/:id', userCtrl.getBlog);

// Brands pages
route.get('/brands/:brand', userCtrl.getBrand);

// Products pages
route.get('/products/:product', userCtrl.getProduct);

// online ordering page
route.get('/online_ordering', userCtrl.getOnlineOrdering);

// DEPRECATED
// Free Form pages
// route.get('/free-form/:freeform', horizonController.getFreeForm);

// 404
route.get('/404', userCtrl.get404);
// if environment = development, 404 will be handled by application/API-layer (expressjs)
// if environment = production, 404 will be handled by server-layer (nginx)
if (process.env.NODE_ENV == "development") {
    route.get('*', (req, res) => res.redirect('/404'))
}

module.exports = route;