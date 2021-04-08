const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon'))

route.get('/', horizonController.getLanding)
route.get('/api/getLandingData', horizonController.getLandingData)
route.post('/api/postHeroData', horizonController.postHeroData)

module.exports = route