const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon'))

route.get('/', horizonController.getLanding)
route.get('/about-us', horizonController.getAbout)
route.get('/blog/:id', horizonController.getBlog)

// ADMIN -> Hero Section
route.get('/api/getLandingData', horizonController.getLandingData)
route.post('/api/postHeroData', horizonController.postHeroData)

// ADMIN -> Lens Designs 1 Section
route.get('/api/getLensDesigns1', horizonController.getLensDesigns1)
route.post('/api/postLensDesigns1', horizonController.postLensDesigns1)

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensInfo1', horizonController.getLensInfo1)
route.post('/api/postLensInfo1', horizonController.postLensInfo1)

// ADMIN -> Lens Info 1 Section
route.get('/api/getLensDesigns2', horizonController.getLensDesigns2)
route.post('/api/postLensDesigns2', horizonController.postLensDesigns2)

// FUNCTIONALITIES
route.get('/api/gallery', horizonController.gallery)
route.post('/api/postImgToGallery', horizonController.postImgToGallery)
route.get('/api/mailing-list', horizonController.mailList)
route.post('/api/subscribe', horizonController.subscribe)

module.exports = route


// /products/zeiss
// /products/ltl
// /products/divel
// /products/roger-bacon

// /free-form/progressive
// /free-form/single-vision
// /free-form/bifocal