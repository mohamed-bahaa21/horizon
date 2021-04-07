const Trainee = require('../models/trainee')


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



exports.getLanding = (req, res, next) => {
    res.render('trainee/landing', {
        err_msg: req.flash('error'),
        succ_msg: req.flash('success')
    })
}

// trainee Landing ---------------------------------------------------------------------------
exports.getJoin = (req, res, next) => {
    res.render('startups/join', {
        pageTitle: 'Storce',
        err_msg: req.flash('error'),
        succ_msg: req.flash('success')
    })
}

exports.postJoin = async (req, res, next) => {
    const email = req.body.email;
    const toLearn = req.body.toLearn;

    if (!email) {
        const result = req.flash('error', 'E-mail address is required.')
        return res.redirect('/')
    }

    const trainee = await Trainee.findOne({
        email: email
    });

    if (trainee) {
        const result = req.flash('error', 'This E-mail already exists')
        return res.redirect('/')
    }

    const newTrainee = await new Trainee({
        email: email,
        toLearn: toLearn
    });
    const saveTrainee = await newTrainee.save();
    if (saveTrainee) {

        const sendEmail = await sgMail.send({
            to: email,
            from: 'Storcego@outlook.com',
            subject: 'We are Super Excited 🤗 to welcome you to Storce',
            html: `
                <h3 style="text-align: center">Very exciting things are coming your way...we will notify you as soon as Storce is available <br>
                    Your future mentors are super pumped to help you level up in your career 🚀 <br>
                    Stay tuned for updates! <br>
                    With ❤ from the Storce team and Staff  <br>
                </h3>
                `
        });

        if(sendEmail) {
            const result = await req.flash('success', 'You Joined the Waitlist Successfully.')
        }
        return res.redirect('/')

    }
}

exports.getList = (req, res, next) => {

    Trainee.find().then(result => {
        res.render('trainee/waitlist', {
            trainees: result
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