const path = require('path');
const express = require('express');
const route = express.Router();

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon.controllers'));




// GLOBAL HEADER CONTROLLER
route.get('/*', function (req, res, next) {
   res.header('Content-Security-Policy', "img-src self http://pngimg.com/uploads/glasses https://firebasestorage.googleapis.com https://via.placeholder.com");
   res.header('Content-Security-Policy', "script-src self https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js");
   res.header('Content-Security-Policy', "frame-src self https://www.google.com/");
   next();
});

// USER_PAGES
route.get('/', horizonController.getLanding);
// route.get('/', horizonController.getComingSoon)

route.get('/about-us', horizonController.getAbout);
route.get('/news', horizonController.getBlogs);
route.get('/blog/:id', horizonController.getBlog);

// Brands pages
route.get('/brands/:brand', horizonController.getBrand);

// Products pages
route.get('/products/:product', horizonController.getProduct);

// DEPRECATED
// Free Form pages
// route.get('/free-form/:freeform', horizonController.getFreeForm);

// ------------------------------------------------------
// Start API GET::POST

// ADMIN -> Blogs Data
route.get('/api/getBlogsData', horizonController.getBlogsData);
route.post('/api/postBlogsData', horizonController.postBlogsData);

// ADMIN -> About Data
route.get('/api/getAboutData', horizonController.getAboutData);
route.post('/api/postAboutData', horizonController.postAboutData);

// ADMIN -> Hero Section
route.get('/api/getLandingData', horizonController.getLandingData);
route.post('/api/postHeroData', horizonController.postHeroData);

// ADMIN -> Lens Designs 1 Section
route.get('/api/getLensDesigns1', horizonController.getLensDesigns1);
route.post('/api/postLensDesigns1', horizonController.postLensDesigns1);

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo1', horizonController.getLensInfo1);
route.post('/api/postLensInfo1', horizonController.postLensInfo1);

// ADMIN -> Lens Designs 2 Section
route.get('/api/getLensDesigns2', horizonController.getLensDesigns2);
route.post('/api/postLensDesigns2', horizonController.postLensDesigns2);

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo2', horizonController.getLensInfo2);
route.post('/api/postLensInfo2', horizonController.postLensInfo2);

// ADMIN -> Watch Video Section
route.get('/api/getWatchVideo', horizonController.getWatchVideo);
route.post('/api/postWatchVideo', horizonController.postWatchVideo);

// ADMIN -> Screen Shots Section
route.get('/api/getScreenShots', horizonController.getScreenShots);
route.post('/api/postScreenShots', horizonController.postScreenShots);

// ADMIN -> Lens Designs 3 Section
route.get('/api/getLensDesigns3', horizonController.getLensDesigns3);
route.post('/api/postLensDesigns3', horizonController.postLensDesigns3);

// ADMIN -> Production Info Section
route.get('/api/getProductionInfo', horizonController.getProductionInfo);
route.post('/api/postProductionInfo', horizonController.postProductionInfo);

// ADMIN -> Production Info Section
route.get('/api/getTechnicalInfo', horizonController.getTechnicalInfo);
route.post('/api/postTechnicalInfo', horizonController.postTechnicalInfo);

// FUNCTIONALITIES
route.get('/api/gallery', horizonController.gallery);
route.post('/api/postImgToGallery', horizonController.postImgToGallery);
route.get('/api/mailing-list', horizonController.mailList);
route.post('/api/subscribe', horizonController.subscribe);

module.exports = route;


// /products/zeiss
// /products/ltl
// /products/divel
// /products/roger-bacon

// /free-form/progressive
// /free-form/single-vision
// /free-form/bifocal
