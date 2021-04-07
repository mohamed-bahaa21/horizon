const Horizon = require('../models/horizon')


// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)



exports.getLanding = (req, res, next) => {
    Horizon.find().then(result => {
        res.render('index', {
            horizon: result[0]
        })
    })
}

// const nodemailer = require('nodemailer')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com", // hostname
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'storcego@outlook.com',
//         pass: 'Storceteamgo123'
//     }
// });

// const sendgridTransport = require('nodemailer-sendgrid-transport')
// const {
//     validationResult
// } = require('express-validator')

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: sendgrid_api_key
//     }
// }))

// Create the transporter with the required configuration for Outlook
// change the user and pass !


// setup e-mail data, even with unicode symbols
// function setupMail(mail){
//     var mailOptions = {
//         from: '"Storce" <storcego@outlook.com>', // sender address (who sends)
//         to: mail, // list of receivers (who receives)
//         subject: 'Hello ', // Subject line
//         text: 'Hello world ', // plaintext body
//         html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
//     };
//     return mailOptions;
// }