const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon'))

route.get('/', horizonController.getLanding)
route.get('/about-us', horizonController.getAbout)
route.get('/blog/:id', horizonController.getBlog)

route.get('/api/getLandingData', horizonController.getLandingData)
route.post('/api/postHeroData', horizonController.postHeroData)

route.get('/api/getProgData', horizonController.getProgData)
route.post('/api/postProgData', horizonController.postProgData)

route.post('/api/postImgToGallery', horizonController.postImgToGallery)
route.post('/api/subscribe', horizonController.subscribe)

module.exports = route


// /products/zeiss
// /products/ltl
// /products/divel
// /products/roger-bacon

// /free-form/progressive
// /free-form/single-vision
// /free-form/bifocal