const path = require('path');
const express = require('express');
const route = express.Router();

const userCtrl = require(path.resolve(__basename, 'controllers', 'user.controllers'));
const apiCtrl = require(path.resolve(__basename, 'controllers', 'api.controllers'));
const JsonHtmlParserCtrl = require(path.resolve(__basename, 'controllers', 'json_html_parser.controllers'));




// GLOBAL HEADER CONTROLLER
route.get('/*', function (req, res, next) {
    res.header('Content-Security-Policy', "img-src self http://pngimg.com/uploads/glasses https://firebasestorage.googleapis.com https://via.placeholder.com");
    res.header('Content-Security-Policy', "script-src self https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js");
    res.header('Content-Security-Policy', "frame-src self https://www.google.com/ https://www.youtube.com/ https://youtube.com/");
    next();
});

// USER_PAGES
route.get('/', JsonHtmlParserCtrl.getLandingLocal);
route.get('/coming-soon', userCtrl.getComingSoon)

route.get('/about-us', userCtrl.getAbout);
route.get('/news', userCtrl.getBlogs);
route.get('/blog/:id', userCtrl.getBlog);

// Brands pages
route.get('/brands/:brand', userCtrl.getBrand);

// Products pages
route.get('/products/:product', userCtrl.getProduct);

// DEPRECATED
// Free Form pages
// route.get('/free-form/:freeform', horizonController.getFreeForm);

// ------------------------------------------------------
// Start API GET::POST

// ADMIN -> Blogs Data
route.get('/api/getBlogsData', apiCtrl.getBlogsData);
route.post('/api/postBlogsData', apiCtrl.postBlogsData);

// ADMIN -> About Data
route.get('/api/getAboutData', apiCtrl.getAboutData);
route.post('/api/postAboutData', apiCtrl.postAboutData);

// ADMIN -> Hero Section
route.get('/api/getLandingData', apiCtrl.getLandingData);
route.post('/api/postHeroData', apiCtrl.postHeroData);

// ADMIN -> Lens Designs 1 Section
route.get('/api/getLensDesigns1', apiCtrl.getLensDesigns1);
route.post('/api/postLensDesigns1', apiCtrl.postLensDesigns1);

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo1', apiCtrl.getLensInfo1);
route.post('/api/postLensInfo1', apiCtrl.postLensInfo1);

// ADMIN -> Lens Designs 2 Section
route.get('/api/getLensDesigns2', apiCtrl.getLensDesigns2);
route.post('/api/postLensDesigns2', apiCtrl.postLensDesigns2);

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo2', apiCtrl.getLensInfo2);
route.post('/api/postLensInfo2', apiCtrl.postLensInfo2);

// ADMIN -> Watch Video Section
route.get('/api/getWatchVideo', apiCtrl.getWatchVideo);
route.post('/api/postWatchVideo', apiCtrl.postWatchVideo);

// ADMIN -> Screen Shots Section
route.get('/api/getScreenShots', apiCtrl.getScreenShots);
route.post('/api/postScreenShots', apiCtrl.postScreenShots);

// ADMIN -> Lens Designs 3 Section
route.get('/api/getLensDesigns3', apiCtrl.getLensDesigns3);
route.post('/api/postLensDesigns3', apiCtrl.postLensDesigns3);

// ADMIN -> Production Info Section
route.get('/api/getProductionInfo', apiCtrl.getProductionInfo);
route.post('/api/postProductionInfo', apiCtrl.postProductionInfo);

// ADMIN -> Production Info Section
route.get('/api/getTechnicalInfo', apiCtrl.getTechnicalInfo);
route.post('/api/postTechnicalInfo', apiCtrl.postTechnicalInfo);

// FUNCTIONALITIES
route.get('/api/gallery', apiCtrl.gallery);
route.post('/api/postImgToGallery', apiCtrl.postImgToGallery);
route.get('/api/mailing-list', apiCtrl.mailList);
route.post('/api/subscribe', apiCtrl.subscribe);


// 404
// route.get('/404', horizonController.get404);
route.get('*', userCtrl.get404);

module.exports = route;


// /products/zeiss
// /products/ltl
// /products/divel
// /products/roger-bacon

// /free-form/progressive
// /free-form/single-vision
// /free-form/bifocal
