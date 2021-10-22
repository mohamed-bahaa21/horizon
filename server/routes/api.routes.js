const path = require('path');
const express = require('express');
const route = express.Router();

const apiCtrl = require(path.resolve(__basename, 'controllers', 'api.controllers'));

// ADMIN -> Auth
// route.post('/postAdminLogin', apiCtrl.postAdminLogin);
// route.post('/postAdminRegister', apiCtrl.postAdminRegister);
// route.get('/getAdminUser', apiCtrl.getAdminUser);

// ADMIN -> Blogs Data
route.get('/getBlogsData', apiCtrl.getBlogsData);
route.post('/postBlogsData', apiCtrl.postBlogsData);

// ADMIN -> About Data
route.get('/getAboutData', apiCtrl.getAboutData);
route.post('/postAboutData', apiCtrl.postAboutData);

// ADMIN -> Hero Section
route.get('/getSectionData/:sectionId', apiCtrl.getSectionData);
route.post('/postHeroData', apiCtrl.postHeroData);

// ADMIN -> Lens Designs 1 Section
route.post('/postLensDesigns1', apiCtrl.postLensDesigns1);

// ADMIN -> Lens Info 1 Section
route.post('/postLensInfo1', apiCtrl.postLensInfo1);

// ADMIN -> Lens Info 3 Section
route.post('/postLensInfo3', apiCtrl.postLensInfo3);

// ADMIN -> Lens Designs 2 Section
route.post('/postLensDesigns2', apiCtrl.postLensDesigns2);

// ADMIN -> Lens Info 1 Section
route.post('/postLensInfo2', apiCtrl.postLensInfo2);

// ADMIN -> Watch Video Section
route.post('/postWatchVideo', apiCtrl.postWatchVideo);

// ADMIN -> Screen Shots Section
route.post('/postScreenShots', apiCtrl.postScreenShots);

// ADMIN -> Lens Designs 3 Section
route.post('/postLensDesigns3', apiCtrl.postLensDesigns3);

// ADMIN -> Production Info Section
route.post('/postProductionInfo', apiCtrl.postProductionInfo);

// ADMIN -> Production Info Section
route.post('/postTechnicalInfo', apiCtrl.postTechnicalInfo);

// FUNCTIONALITIES
route.get('/gallery', apiCtrl.gallery);
route.post('/postImgToGallery', apiCtrl.postImgToGallery);
route.get('/mailing-list', apiCtrl.mailList);
route.post('/subscribe', apiCtrl.subscribe);

module.exports = route;