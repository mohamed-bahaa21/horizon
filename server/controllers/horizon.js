const Horizon = require("../models/horizon");
const Blog = require("../models/Blog");
const About = require("../models/About");
const Gallery = require("../models/Gallery");
const Mail = require("../models/Mail");

// const SENDGRID_API = process.env.SENDGRID_API
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(SENDGRID_API)

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Landing Page
exports.getLanding = (req, res, next) => {
  Horizon.find().then((result) => {
    Blog.find().limit(3).then(blogs => {
      // console.log(blogs;      
      // console.log(result[4]);

      res.render("index", {
        msgs: req.flash('success'),
        horizon: result[0],
        blogs: blogs,
        ld1: result[1],
        li1: result[2],
        ld2: result[3],
        li2: result[4]
      })
    });
  });
};

// User -> About Page
exports.getAbout = (req, res, next) => {
  About.findById('6088f039ce64255fe8d24880').then((about) => {
    console.log(about);
    res.render("about", {
      msgs: req.flash('success'),
      about: about
    });
  });
};

// END
// Admin -> About Data
exports.getAboutData = (req, res, next) => {
  About.findById('6088f039ce64255fe8d24880').then((about) => {
    console.log(about);
    res.json(about);
  });
};

exports.postAboutData = (req, res, next) => {
  const {
    content
  } = req.body;

  About.findById('6088f039ce64255fe8d24880')
    .then((about) => {
      console.log(req.body);
      // horizon.name = name;
      about.content = content;

      about
        .save()
        .then(() => res.json("Blogs Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};










// User Get Blog By ID route
exports.getBlog = (req, res, next) => {
  const blogID = req.params.id;

  Blog.findById(blogID).then(result => {
    Blog.find().limit(3).then(blogs => {
      // console.log(result);

      res.render('blog', {
        msgs: req.flash('success'),
        blog: result,
        blogs: blogs
      })
    });
  })
};

// Admin Gets, Edits -> Blogs Data 
exports.getBlogsData = (req, res, next) => {
  Blog.find().then((result) => {
    console.log(result);
    res.json(result);
  });
};

exports.postBlogsData = (req, res, next) => {
  const {
    date,
    title,
    summary,
    content,
    link,
    bg,
  } = req.body;

  Blog.find()
    .then((blogs) => {
      // console.log(req.body);
      // horizon.name = name;
      blogs.date = date;
      blogs.title = title;
      blogs.summary = summary;
      blogs.content = content;
      blogs.link = link;
      blogs.bg = bg;

      blogs
        .save()
        .then(() => res.json("Blogs Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
// END SECTION
// Landing page data
exports.getLandingData = (req, res, next) => {
  var origin = req.originalUrl;

  Horizon.find().then((result) => {
    res.json(result);
  });
};

// Admin Edits -> Hero Section Data 
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
      // console.log(req.body);
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
// END SECTION
// Admin Gets, Edits -> Lens Designs 1 Section Data 
exports.getLensDesigns1 = (req, res, next) => {
  Horizon.findById("606ff91fef83672e10f01feb").then((result) => {
    res.json(result);
  });
};

exports.postLensDesigns1 = (req, res, next) => {
  const {
    prog_card_1_img,
    prog_card_1_link,
    prog_card_1_type,
    prog_card_1_header,
  } = req.body;

  Horizon.findById("606ff91fef83672e10f01feb")
    .then((horizon) => {
      // console.log(req.body);
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
// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensInfo1 = (req, res, next) => {
  Horizon.findById("608514b45b363f4088e7e050").then((result) => {
    res.json(result);
  });
};

exports.postLensInfo1 = (req, res, next) => {
  const {
    li1_header,
    li1_desc,
    li1_img,
    li1_parag_1,
    li1_parag_2,
    li1_parag_3,
    li1_parag_4
  } = req.body;

  Horizon.findById("608514b45b363f4088e7e050")
    .then((horizon) => {
      // console.log(req.body);
      // horizon.name = name;
      horizon.li1_header = li1_header;
      horizon.li1_desc = li1_desc;
      horizon.li1_img = li1_img;
      horizon.li1_parag_1 = li1_parag_1;
      horizon.li1_parag_2 = li1_parag_2;
      horizon.li1_parag_3 = li1_parag_3;
      horizon.li1_parag_4 = li1_parag_4;

      horizon
        .save()
        .then(() => res.json("Horizon Updated !!!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensDesigns2 = (req, res, next) => {
  Horizon.findById("6085432c5b363f4088e7e051").then((result) => {
    res.json(result);
  });
};

exports.postLensDesigns2 = (req, res, next) => {
  const {
    ld2_header,
    ld2_desc,
    ld2_designs
  } = req.body;

  Horizon.findById("6085432c5b363f4088e7e051")
    .then((horizon) => {
      // console.log(req.body);
      // horizon.name = name;
      horizon.ld2_header = ld2_header;
      horizon.ld2_desc = ld2_desc;
      horizon.ld2_designs = ld2_designs;

      horizon
        .save()
        .then(() => res.json("Horizon Updated !!!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensInfo2 = (req, res, next) => {
  Horizon.findById("6086c203d9b6ec4c30d027de").then((result) => {
    res.json(result);
  });
};

exports.postLensInfo2 = (req, res, next) => {
  const {
    li2_header,
    li2_desc,
    li2_lft_parags,
    li2_rght_paragas
  } = req.body;

  Horizon.findById("6086c203d9b6ec4c30d027de")
    .then((horizon) => {
      // console.log(req.body);
      // horizon.name = name;
      horizon.li2_header = li2_header;
      horizon.li2_desc = li2_desc;
      horizon.li2_lft_parags = li2_lft_parags;
      horizon.li2_rght_paragas = li2_rght_paragas;

      horizon
        .save()
        .then(() => res.json("Horizon Updated !!!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};


// FUNCTIONALITIES
// Admin gets Gallery
exports.gallery = (req, res, next) => {
  Gallery.find({}, {
    __v: 0
  }).then((result) => {
    res.json(result);
  });
}

// Admin Uploads Image TO DB
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

// Admin gets maillist
exports.mailList = (req, res, next) => {
  Mail.find({}, {
    _id: 0,
    __v: 0
  }).then((result) => {
    res.json(result);
  });
}

// User Subscribes
exports.subscribe = (req, res, next) => {
  // console.log(req.body);

  const {
    mail_email
  } = req.body;

  const email = new Mail({
    mail_email: mail_email
  })

  email.save()
    .then(() => {
      req.flash('success', 'Subscribed Successfully...')
      res.redirect('/#footer')
    })
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