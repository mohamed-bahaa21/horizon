const path = require('path');
const express = require('express');
const route = express.Router();

const apiCtrl = require(path.resolve(__basename, 'controllers', 'api.controllers'));

// ADMIN -> Auth
// route.post('/postAdminLogin', apiCtrl.postAdminLogin);
// route.post('/postAdminRegister', apiCtrl.postAdminRegister);
// route.get('/getAdminUser', apiCtrl.getAdminUser);

// 'getBlogsData'
// 'getBlogsCount'
// 'createNewBlogData'
// 'getBlogData/:blogId'
// 'editBlogMetaData'
// 'editBlogContentData'
// 'deleteBlogData'

// ADMIN -> Blog(s) Data
route.get('/getBlogsData', apiCtrl.getBlogsData);
route.get('/getBlogsCount', apiCtrl.getBlogsCount);
// ADMIN -> Blog Data
route.post('/createNewBlogData', apiCtrl.createNewBlogData);
route.get('/getBlogMetaData/:blogId', apiCtrl.getBlogMetaData);
route.get('/getBlogContentData/:contentId', apiCtrl.getBlogContentData);
route.post('/editBlogMetaData/:blogId', apiCtrl.editBlogMetaData);
route.post('/editBlogContentData/:contentId', apiCtrl.editBlogContentData);
route.post('/deleteBlogData/:blogId', apiCtrl.deleteBlogData);

// ADMIN -> Accessories Data
route.get('/getAccessoriesData', apiCtrl.getAccessoriesData);
route.post('/postAccessoriesData', apiCtrl.postAccessoriesData);

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
route.get('/online-ordering', apiCtrl.getOnlineOrdering);
route.post('/online-ordering', apiCtrl.onlineOrdering);

// Editorjs
route.get('/getNews', apiCtrl.getNews);
route.get('/editorjs', apiCtrl.getEditorjs);
route.post('/editorjs', apiCtrl.editorjs);

module.exports = route;