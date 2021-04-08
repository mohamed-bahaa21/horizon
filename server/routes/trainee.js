const path = require('path')
const express = require('express')
const route = express.Router()

const traineeController = require(path.resolve(__basename, 'controllers', 'trainee'))

route.get('/', traineeController.getLanding)

// route.post('/trainee-waitlist', traineeController.postJoin)

route.get('/waitlist', traineeController.getList)

module.exports = route