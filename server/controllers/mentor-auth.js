const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const {
    validationResult
} = require('express-validator')

const SENDGRID_API = process.env.SENDGRID_API
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API)

const Mentor = require('../models/mentor')

// mentor signup ---------------------------------------------------------------------------
exports.postSignup = async (req, res, next) => {
    const name = req.body.name;
    console.log(req.body.name)
    const email = req.body.email;
    const phone = req.body.phone;
    const category = req.body.category;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        req.flash('error', errors.array()[0].msg)
        return res.redirect('/mentor');
    }

    if (!name || !email || !phone || !category) {
        req.flash('error', '"Please fill in the required fields')
        return res.redirect('/mentor');
    }

    // No Errors -> find if mentor existed
    const mentor = await Mentor.findOne({
        email: email
    })
    if (mentor) {
        req.flash('error', 'This E-mail already exists')
        return res.redirect('/mentor');
    }

    // Mentor doesn't exist -> save new mentor 

    const newMentor = new Mentor({
        name: name,
        email: email,
        phone: phone,
        category: category
    });

    const result = await newMentor.save();

    if (result) {
        const sendEmail = await sgMail.send({
            to: email,
            from: 'Storcego@outlook.com',
            subject: "You've signed up to Storce, we are so excited to have you on board!",
            html: `
                <h3 style="text-align: left">
                Hey <b>${name}</b>!
                <br>
                You've successfully signed up to create your Space on Storce. <br>
                Let's have a quick call for 5-10 minutes to discuss your Space details and complete your verification process. <br>
                <br>
                Feel free to let me know which channel of communication suits you best, I personally prefer Zoom or Skype. <br>
                <br>
                Kindly reply to this email with the time and date most convenient for you. <br>
                <br>
                (Preferably within the next 2 days) <br>
                <br>
                Looking forward to our call! <br>
                <br>
                Mary from Storce, <br>
                </h3>
                `
        });

        if (sendEmail) {
            const result = await req.flash('success', 'You Joined the Waitlist Successfully.')
        }
        return res.redirect('/mentor')
    }
}