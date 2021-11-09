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

// ADMIN -> Section Data
route.get('/getSectionData/:sectionId', apiCtrl.getSectionData);
route.post('/postSectionData', apiCtrl.postSectionData);

// ADMIN -> Seo Data
route.get('/getSeoData/:page_id', apiCtrl.getSeoData);
route.post('/postSeoData', apiCtrl.postSeoData);

// FUNCTIONALITIES
route.get('/gallery', apiCtrl.gallery);
route.post('/postImgToGallery', apiCtrl.postImgToGallery);
route.get('/mailing-list', apiCtrl.mailList);
route.post('/subscribe', apiCtrl.subscribe);
route.post('/online-ordering', apiCtrl.onlineOrdering);

// Editorjs
route.get('/getNews', apiCtrl.getNews);
route.get('/editorjs', apiCtrl.getEditorjs);
route.post('/editorjs', apiCtrl.editorjs);

module.exports = route;