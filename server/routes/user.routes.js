const path = require('path');
const express = require('express');
const { read } = require('fs');
const route = express.Router();

const userCtrl = require(path.resolve(__basename, 'controllers', 'user.controllers'));

// coming-soon
route.get('/coming-soon', userCtrl.getComingSoon)

route.post('/ejs_axios_get_data', (req, res) => {
    // -30/30   death
    // 30/90    points
    // 90/150   coins
    // 150/210  sale
    // 210/270  what
    // 270/330  nothing
    var presents = [
        'death',
        'points',
        'coins',
        'sale',
        'what',
        'nothing'
    ]

    // for (let i = 0; i <= presents.length; i++) { }
    // var deg_res = (increment) => {
    //     var total = (330) + (130 * increment);
    //     console.log(total);
    //     return total;
    // };
    var { deg } = req.body;
    var degree = (deg - 690) / 60;

    console.log("deg: ", deg);
    console.log("degree: ", degree);
    if ((degree > 0 && degree < 1) || (degree > 6 && degree < 7)) { res.send(`Death`) }
    else if ((degree > 1 && degree < 2) || (degree > 7 && degree < 8)) { res.send(`Points`) }
    else if ((degree > 2 && degree < 3) || (degree > 8 && degree < 9)) { res.send(`Coins`) }
    else if ((degree > 3 && degree < 4) || (degree > 9 && degree < 10)) { res.send(`Sale`) }
    else if ((degree > 4 && degree < 5) || (degree > 10 && degree < 11)) { res.send(`Product`) }
    else if ((degree > 5 && degree < 6) || (degree > 11 && degree < 12)) { res.send(`Nothing`) }
    else { res.send(`Try Again`) }
});
// USER_PAGES
route.get('/', userCtrl.getLanding);
route.get('/accessories', userCtrl.getAccessories);
route.get('/about-us', userCtrl.getAbout);

// User -> Blog(s) Data
route.get('/news', userCtrl.getBlogs);
// User -> Blog Data
route.get('/news/:id', userCtrl.getBlog);

// Brands pages
route.get('/brands/:brand_id', userCtrl.getBrand);

// Products pages
route.get('/products/:product', userCtrl.getProduct);
// Products pages
route.get('/products/:product/designs/:design', userCtrl.getProductDesign);


// online ordering page
route.get('/online_ordering', userCtrl.getOnlineOrdering);


// if environment = development, 404 will be handled by application/API-layer (expressjs)
// if environment = production, 404 will be handled by server-layer (nginx)
if (process.env.NODE_ENV == "development") {
    // route.get('*', (req, res) => res.redirect('/404'))
}

module.exports = route;