const path = require('path')
const express = require('express')
const route = express.Router()

const horizonController = require(path.resolve(__basename, 'controllers', 'horizon'))

route.get('/', horizonController.getLanding)

module.exports = route