const path = require('path');
const express = require('express');
const { read } = require('fs');
const route = express.Router();

const bodyParser = require("body-parser");
const User = require("../models/User.model");

const app = express();
const router = express.Router();

require('dotenv').config();

var AWS = require('aws-sdk');

const userCtrl = require(path.resolve(__basename, 'controllers', 'user.controllers'));

// coming-soon
route.get('/coming-soon', userCtrl.getComingSoon)

route.post('/ejs_axios_get_data', (req, res) => {
    // -30/30   death
    // 30/90    points
    // 90/150   coins
    // 150/210  sale
    // 210/270  what
    // 270/330  nothing
    var presents = [
        'death',
        'points',
        'coins',
        'sale',
        'what',
        'nothing'
    ]

    // for (let i = 0; i <= presents.length; i++) { }
    // var deg_res = (increment) => {
    //     var total = (330) + (130 * increment);
    //     console.log(total);
    //     return total;
    // };
    var { deg } = req.body;
    var degree = (deg - 690) / 60;

    console.log("deg: ", deg);
    console.log("degree: ", degree);
    if ((degree > 0 && degree < 1) || (degree > 6 && degree < 7)) { res.send(`Death`) }
    else if ((degree > 1 && degree < 2) || (degree > 7 && degree < 8)) { res.send(`Points`) }
    else if ((degree > 2 && degree < 3) || (degree > 8 && degree < 9)) { res.send(`Coins`) }
    else if ((degree > 3 && degree < 4) || (degree > 9 && degree < 10)) { res.send(`Sale`) }
    else if ((degree > 4 && degree < 5) || (degree > 10 && degree < 11)) { res.send(`Product`) }
    else if ((degree > 5 && degree < 6) || (degree > 11 && degree < 12)) { res.send(`Nothing`) }
    else { res.send(`Try Again`) }
});

route.post("/wheel", (req, res, next) => {
    var { phone } = req.body;
    console.log("post_phone: ", phone);
    // var randomOTP = `${Math.floor(100000 + Math.random() * 900000)}`
    var randomOTP = '000000'

    User.findOne({ phone: phone }).then(user => {

        if (!user) {
            console.log("no user");

            const newUser = new User({
                phone: phone,
                otp: randomOTP,
                otp_valid: true,
                unread: true
            });

            newUser.save()
                .then(() => {
                    // ======================================================
                    // send verification message









                    const YOUR_MESSAGE = `Your verification code is ${randomOTP}`
                    var subject = "Signup";

                    // console.log("Subject = " + subject);
                    // console.log("Phone = " + phone);
                    // console.log("OTP_Message = " + randomOTP);

                    var params = {
                        Message: YOUR_MESSAGE,
                        PhoneNumber: phone,
                        MessageAttributes: {
                            'AWS.SNS.SMS.SenderID': {
                                'DataType': 'String',
                                'StringValue': subject
                            },
                            'AWS.SNS.SMS.SMSType': {
                                'DataType': 'String',
                                'StringValue': "Transactional"
                            }
                        }
                    };

                    // req.flash('info', "We sent the new verification code")
                    // res.redirect(`/wheel/verify`)
                    res.send("We sent the new verification code")

                    // var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
                    // publishTextPromise.then(
                    //     function (data) {
                    //         res.app.locals.phone = phone;
                    //         // console.log(data)
                    //         // res.end(JSON.stringify({ MessageID: data.MessageId, OTP: randomOTP }));



                    //     }).catch(
                    //         function (err) {
                    //             res.end(JSON.stringify({ Error: err }));
                    //         });















                    // ==============================================
                })
                .catch(err => {
                    // res.send(err)
                    // req.flash('info', "[1] Something went wrong")
                    // res.redirect('/wheel'`)
                    res.send("[1] Something went wrong")
                })
        } else {
            if (user.otp_valid) {
                res.app.locals.phone = phone;

                // req.flash('info', "We already have sent a code, check it out !")
                // res.redirect('/wheel/verify')
                res.send("We already have sent a code, check it out !")
            } else {
                if (user.username) {
                    // req.flash('info', "You already have an account")
                    // res.redirect('/login')
                    res.send("You already have an account")
                } else {
                    // req.flash('info', "We sent and you missed, signup tomorrow")
                    // res.redirect('/wheel')
                    res.send("We sent and you missed, signup tomorrow")
                }
            }
        }
    });

});
route.post('/wheel/verify', (req, res, next) => {

    var { digit_1, digit_2, digit_3, digit_4, digit_5, digit_6 } = req.body;
    // var SUBMITTED_OTP = digit_1 + digit_2 + digit_3 + digit_4 + digit_5 + digit_6;
    var SUBMITTED_OTP = '000000';

    console.log("SUBMITTED_OTP: ", SUBMITTED_OTP);

    User.findOne({ phone: res.app.locals.phone }).then(user => {
        if (user) {
            if (user.otp_valid) {
                if (user.otp == SUBMITTED_OTP) {

                    user.otp = null;
                    user.otp_valid = false;

                    user.save()
                        .then(data => {
                            console.log(data);
                            // req.flash('info', "Accepted, Setup you account")
                            // res.redirect('/wheel/setup')
                            res.send("Accepted, Setup you account")
                        })
                        .catch(err => {
                            console.log("Error: ", err);
                            // req.flash('info', "[verify] Something went wrong")
                            // res.redirect('/wheel/verify')
                            res.send("[verify] Something went wrong")
                        })
                } else {
                    // req.flash('info', "Wrong verification code")
                    // res.redirect('/wheel/verify')
                    res.send("Wrong verification code")
                }
            } else {
                // req.flash('info', "Verification code isn't valid")
                // res.redirect('/wheel/verify')
                res.send("Verification code isn't valid")
            }
        } else {
            // req.flash('info', "[*] Something went wrong")
            // res.redirect('/wheel')
            res.send("[*] Something went wrong")
        }
    })
})

// USER_PAGES
route.get('/', userCtrl.getLanding);
route.get('/accessories', userCtrl.getAccessories);
route.get('/about-us', userCtrl.getAbout);

// User -> Blog(s) Data
route.get('/news', userCtrl.getBlogs);
// User -> Blog Data
route.get('/news/:id', userCtrl.getBlog);

// Brands pages
route.get('/brands/:brand_id', userCtrl.getBrand);

// Products pages
route.get('/products/:product', userCtrl.getProduct);
// Products pages
route.get('/products/:product/designs/:design', userCtrl.getProductDesign);


// online ordering page
route.get('/online_ordering', userCtrl.getOnlineOrdering);


// if environment = development, 404 will be handled by application/API-layer (expressjs)
// if environment = production, 404 will be handled by server-layer (nginx)
if (process.env.NODE_ENV == "development") {
    // route.get('*', (req, res) => res.redirect('/404'))
}

module.exports = route;