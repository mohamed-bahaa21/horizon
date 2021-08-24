// #1
// const htmlparser2 = require('htmlparser2');

// const SENDGRID_API = process.env.SENDGRID_API
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(SENDGRID_API)

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)


//  #2
// exports.getunknown = (req, res) => {
//     var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//     logger.error("GET 404 Not Found", fullUrl);
//     res.redirect('/404');
// }

// #3
// const nodemailer = require('nodemailer')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com", // hostname
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'horizon@outlook.com',
//         pass: 'horizon123'
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
//         from: '"Horiozon" <horizon@outlook.com>', // sender address (who sends)
//         to: mail, // list of receivers (who receives)
//         subject: 'Hello ', // Subject line
//         text: 'Hello world ', // plaintext body
//         html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
//     };
//     return mailOptions;
// }

// if (result) {
//     const sendEmail = await sgMail.send({
//         to: email,
//         from: 'Horizon@outlook.com',
//         subject: "You've signed up to Horizon, we are so excited to have you on board!",
//         html: `
//             <h3 style="text-align: left">
//             Hey <b>${name}</b>!
//             <br>
//             You've successfully signed up <br>
//             </h3>
//             `
//     });

//     if (sendEmail) {
//         const result = await req.flash('success', 'You Joined the Waitlist Successfully.')
//     }
//     return res.redirect('/')
// }

// #4
// ----------------------------------------------------------------- END

// START User -> Product Page
// DEPRECATED
// exports.getFreeForm = (req, res) => {
//     const {
//         brand
//     } = req.params;

//     console.log(brand);

//     if (brand == 'Zeiss') {
//         res.render('product', {
//             msgs: req.flash('success'),
//             test: 'Hello Zeiss'
//         });
//     } else if (brand == 'ltl') {
//         res.render('product', {
//             msgs: req.flash('success'),
//             test: 'Hello LTL'
//         });

//     } else if (brand == 'divel') {
//         res.render('product', {
//             msgs: req.flash('success'),
//             test: 'Hello Divel'
//         });

//     } else if (brand == 'roger-bacon') {
//         res.render('product', {
//             msgs: req.flash('success'),
//             test: 'Hello Roger-Bacon'
//         });

//     } else {
//         res.render('product', {
//             msgs: req.flash('success'),
//             test: 'Hello Zeiss'
//         });
//     }
// };
// ------------------------ END

// START User -> Product Page
