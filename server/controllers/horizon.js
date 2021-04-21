const Horizon = require("../models/horizon");
const Blog = require("../models/Blog");
const Gallery = require("../models/Gallery");

// const SENDGRID_API = process.env.SENDGRID_API
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(SENDGRID_API)

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.getLanding = (req, res, next) => {
  Horizon.find().then((result) => {
    Blog.find().limit(3).then(blogs => {
      // console.log(blogs;      
      // console.log(result);
      res.render("index", {
        horizon: result[0],
        prog: result[1],
        blog1: blogs[0],
        blog2: blogs[1],
        blog3: blogs[2],
      })
    });
  });
};

// Section 1
exports.getLandingData = (req, res, next) => {
  var origin = req.originalUrl;

  Horizon.find().then((result) => {
    res.json(result);
  });
};

exports.postHeroData = (req, res, next) => {
  const {
    name,
    hero_parag_1,
    hero_header_1,
    hero_parag_2,
    hero_link_1_name,
    hero_link_1_href,
  } = req.body;

  Horizon.findById("606f5689ff5464449437a646")
    .then((horizon) => {
      console.log(req.body);
      horizon.name = name;
      horizon.hero_parag_1 = hero_parag_1;
      horizon.hero_header_1 = hero_header_1;
      horizon.hero_parag_2 = hero_parag_2;
      horizon.hero_link_1_name = hero_link_1_name;
      horizon.hero_link_1_href = hero_link_1_href;

      horizon
        .save()
        .then(() => res.json("horizon updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// Section 2
exports.getProgData = (req, res, next) => {
  Horizon.findById("606ff91fef83672e10f01feb").then((result) => {
    res.json(result);
  });
};

exports.postProgData = (req, res, next) => {
  const {
    prog_card_1_img,
    prog_card_1_link,
    prog_card_1_type,
    prog_card_1_header,
  } = req.body;

  Horizon.findById("606ff91fef83672e10f01feb")
    .then((horizon) => {
      console.log(req.body);
      // horizon.name = name;
      horizon.prog_card_1_img = prog_card_1_img;
      horizon.prog_card_1_link = prog_card_1_link;
      horizon.prog_card_1_type = prog_card_1_type;
      horizon.prog_card_1_header = prog_card_1_header;

      horizon
        .save()
        .then(() => res.json("horizon updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.postImgToGallery = (req, res, next) => {
  // console.log(req.body);
    
  const {
    url
  } = req.body;

  const image = new Gallery({
    img_url: url
  })
  
  image.save()
    .then(() => res.json("Image Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
};

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