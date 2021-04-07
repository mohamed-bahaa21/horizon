const path = require('path')
const express = require('express')
const route = express.Router()
const { check, body } = require('express-validator')

const mentorController = require(path.resolve(__basename, 'controllers', 'mentor'))
const authController = require(path.resolve(__basename, 'controllers', 'mentor-auth'))


route.get('/', mentorController.getLanding)

// mentor signup ---------------------------------------------------------------------------
route.post('/signup',
    [
        body('name', 'Name field should be less than 50 characters')
        .isLength({min: 5, max: 50}),
        check('email', 'Please enter a valid email.')
        .isLength({min: 5, max: 255})
        .isEmail(),
        body('phone', 'Phone Number should be atleast 7 Numbers.')
        .isLength({ min: 3, max: 255 })
        .isNumeric(),
    ],
    authController.postSignup
)

// route.get('/waitlist', mentorController.getList)

module.exports = route