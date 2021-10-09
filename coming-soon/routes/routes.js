const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'controllers'))

route.get('/', horizonController.getComingSoon)
route.post('/api/subscribe', horizonController.subscribe)

module.exports = route