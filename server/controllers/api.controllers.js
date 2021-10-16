const Admin = require("../models/Admin");
const Horizon = require('../models/horizon');
const Blog = require('../models/Blog');
const About = require('../models/About');
const Gallery = require('../models/Gallery');
const Mail = require('../models/Mail');

const Logger = require('../services/logger.service');
const logger = new Logger('horizon.controller');

// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
// const bcrypt = require("bcryptjs");


// Admin Auth
exports.postAdminLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                // res.send("Successfully Authenticated");
                // console.log(req.user);
                // return res.redirect('http://localhost:3000/' + req.user._id || req.session.user._id);
                return res.send(req.user._id || req.session.user._id);
            });
        }
    })(req, res, next);
};

exports.postAdminRegister = (req, res) => {
    Admin.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new Admin({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
};

exports.getAdminUser = (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
};

// Admin -> About Data
exports.getAboutData = (req, res) => {
    About.findById('6088f039ce64255fe8d24880').then((about) => {
        console.log(about);
        res.json(about);
    });
};

exports.postAboutData = (req, res) => {
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
                .then(() => res.json('Blogs Updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};





// Admin Gets, Edits -> Blogs Data 
exports.getBlogsData = (req, res) => {
    Blog.find().then((result) => {
        console.log(result);
        res.json(result);
    });
};

exports.postBlogsData = (req, res) => {
    const {
        date,
        title,
        summary,
        content,
        link,
        bg,
    } = req.body;

    Blog.findById()
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
                .then(() => res.json('Blogs Updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};
// END SECTION

// Landing page data
exports.getHeroData = (req, res) => {
    var origin = req.originalUrl;

    Horizon.findById('6165f63fb58cb67e24ac85f9').then((result) => {
        res.json(result);
    });
};

// Admin Edits -> Hero Section Data 
exports.postHeroData = (req, res) => {
    const {
        hero_section_display,
        name,
        hero_parag_1,
        hero_header_1,
        hero_parag_2,
        hero_link_1_name,
        hero_link_1_href,
        design_state,
        design_img
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85f9')
        .then((horizon) => {
            // console.log(req.body);
            horizon.hero_section_display = hero_section_display;
            horizon.name = name;
            horizon.hero_parag_1 = hero_parag_1;
            horizon.hero_header_1 = hero_header_1;
            horizon.hero_parag_2 = hero_parag_2;
            horizon.hero_link_1_name = hero_link_1_name;
            horizon.hero_link_1_href = hero_link_1_href;
            horizon.design_state = design_state;
            horizon.design_img = design_img;

            horizon
                .save()
                .then(() => res.json('horizon updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};
// END SECTION
// Admin Gets, Edits -> Lens Designs 1 Section Data 
exports.getLensDesigns1 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85fa').then((result) => {
        res.json(result);
        console.log(result);
    });
};

exports.postLensDesigns1 = (req, res) => {
    const { section_display } = req.body;
    const {
        prog_card_1_img,
        prog_card_1_link,
        prog_card_1_type,
        prog_card_1_header,
        prog_card_2_img,
        prog_card_2_link,
        prog_card_2_type,
        prog_card_2_header,
        prog_card_3_img,
        prog_card_3_link,
        prog_card_3_type,
        prog_card_3_header,
        prog_card_4_img,
        prog_card_4_link,
        prog_card_4_type,
        prog_card_4_header,
    } = req.body.section_content;

    const section_content = {
        prog_card_1_img: prog_card_1_img,
        prog_card_1_link: prog_card_1_link,
        prog_card_1_type: prog_card_1_type,
        prog_card_1_header: prog_card_1_header,
        prog_card_2_img: prog_card_2_img,
        prog_card_2_link: prog_card_2_link,
        prog_card_2_type: prog_card_2_type,
        prog_card_2_header: prog_card_2_header,
        prog_card_3_img: prog_card_3_img,
        prog_card_3_link: prog_card_3_link,
        prog_card_3_type: prog_card_3_type,
        prog_card_3_header: prog_card_3_header,
        prog_card_4_img: prog_card_4_img,
        prog_card_4_link: prog_card_4_link,
        prog_card_4_type: prog_card_4_type,
        prog_card_4_header: prog_card_4_header,
    }

    // console.log(req.body);

    Horizon.findById('6165f63fb58cb67e24ac85fa')
        .then((horizon) => {
            // console.log(req.body);
            horizon.section_display = section_display;
            horizon.section_content = section_content;

            horizon
                .save()
                .then(() => res.json('horizon updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};
// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensInfo1 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85fb').then((result) => {
        res.json(result);
    });
};

exports.postLensInfo1 = (req, res) => {
    const {
        li1_section_display = li1_section_display,
        li1_header,
        li1_desc,
        li1_img,
        li1_parag_1,
        li1_parag_2,
        li1_parag_3,
        li1_parag_4
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85fb')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.li1_section_display = li1_section_display;
            horizon.li1_header = li1_header;
            horizon.li1_desc = li1_desc;
            horizon.li1_img = li1_img;
            horizon.li1_parag_1 = li1_parag_1;
            horizon.li1_parag_2 = li1_parag_2;
            horizon.li1_parag_3 = li1_parag_3;
            horizon.li1_parag_4 = li1_parag_4;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensInfo3 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac8603').then((result) => {
        res.json(result);
    });
};

exports.postLensInfo3 = (req, res) => {
    const {
        li3_section_display = li3_section_display,
        li3_header,
        li3_desc,
        li3_img,
        li3_parag_1,
        li3_parag_2,
        li3_parag_3,
        li3_parag_4,
        li3_parag_5,
        li3_parag_6
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac8603')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.li3_section_display = li3_section_display;
            horizon.li3_header = li3_header;
            horizon.li3_desc = li3_desc;
            horizon.li3_img = li3_img;
            horizon.li3_parag_1 = li3_parag_1;
            horizon.li3_parag_2 = li3_parag_2;
            horizon.li3_parag_3 = li3_parag_3;
            horizon.li3_parag_4 = li3_parag_4;
            horizon.li3_parag_5 = li3_parag_5;
            horizon.li3_parag_6 = li3_parag_6;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensDesigns2 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85ff').then((result) => {
        res.json(result);
    });
};

exports.postLensDesigns2 = (req, res) => {
    const {
        ld2_section_display,
        ld2_header,
        ld2_desc,
        ld2_designs
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85ff')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.ld2_section_display = ld2_section_display;
            horizon.ld2_header = ld2_header;
            horizon.ld2_desc = ld2_desc;
            horizon.ld2_designs = ld2_designs;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};
// END SECTION
// Admin Gets, Edits -> Lens Info 1 Section Data 
exports.getLensInfo2 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85fc').then((result) => {
        res.json(result);
    });
};

exports.postLensInfo2 = (req, res) => {
    const {
        li2_section_display,
        li2_header,
        li2_desc,
        li2_image,
        li2_lft_parags,
        li2_rght_parags
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85fc')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.li2_section_display = li2_section_display;
            horizon.li2_header = li2_header;
            horizon.li2_desc = li2_desc;
            horizon.li2_image = li2_image;
            horizon.li2_lft_parags = li2_lft_parags;
            horizon.li2_rght_parags = li2_rght_parags;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};









// Admin Gets, Edits -> Watch Video Section Data 
exports.getWatchVideo = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85fd').then((result) => {
        res.json(result);
    });
};

exports.postWatchVideo = (req, res) => {
    const {
        wv_section_display,
        wv_header,
        wv_desc,
        wv_link
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85fd')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.wv_section_display = wv_section_display;
            horizon.wv_header = wv_header;
            horizon.wv_desc = wv_desc;
            horizon.wv_link = wv_link;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// Admin Gets, Edits -> Watch Video Section Data 
exports.getScreenShots = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac85fe').then((result) => {
        res.json(result);
    });
};

exports.postScreenShots = (req, res) => {
    const {
        ss_section_display,
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac85fe')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.ss_section_display = ss_section_display;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// Admin Gets, Edits -> Lens Designs 3 Section Data 
exports.getLensDesigns3 = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac8600').then((result) => {
        res.json(result);
    });
};

exports.postLensDesigns3 = (req, res) => {
    const {
        ld3_section_display,
        ld3_header,
        ld3_desc,
        ld3_imgs
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac8600')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.ld3_section_display = ld3_section_display;
            horizon.ld3_header = ld3_header;
            horizon.ld3_desc = ld3_desc;
            horizon.ld3_imgs = ld3_imgs;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// Admin Gets, Edits -> Production Info Section Data 
exports.getProductionInfo = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac8601').then((result) => {
        res.json(result);
    });
};

exports.postProductionInfo = (req, res) => {
    const {
        pi_section_display,
        pi_header,
        pi_desc,
        pi_items
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac8601')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.pi_section_display = pi_section_display;
            horizon.pi_header = pi_header;
            horizon.pi_desc = pi_desc;
            horizon.pi_items = pi_items;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// Admin Gets, Edits -> Production Info Section Data 
exports.getTechnicalInfo = (req, res) => {
    Horizon.findById('6165f63fb58cb67e24ac8602').then((result) => {
        res.json(result);
    });
};

exports.postTechnicalInfo = (req, res) => {
    const {
        ti_section_display,
        ti_header,
        ti_desc,
        ti_items
    } = req.body;

    Horizon.findById('6165f63fb58cb67e24ac8602')
        .then((horizon) => {
            // console.log(req.body);
            // horizon.name = name;
            horizon.ti_section_display = ti_section_display;
            horizon.ti_header = ti_header;
            horizon.ti_desc = ti_desc;
            horizon.ti_items = ti_items;

            horizon
                .save()
                .then(() => res.json('Horizon Updated !!!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

// FUNCTIONALITIES
// Admin gets Gallery
exports.gallery = (req, res) => {
    Gallery.find({}, {
        __v: 0
    }).then((result) => {
        res.json(result);
    });
};

// Admin Uploads Image TO DB
exports.postImgToGallery = (req, res) => {
    // console.log(req.body);

    const {
        url
    } = req.body;

    const image = new Gallery({
        img_url: url
    });

    image.save()
        .then(() => res.json('Image Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
};

// Admin gets maillist
exports.mailList = (req, res) => {
    Mail.find({}, {
        _id: 0,
        __v: 0
    }).then((result) => {
        res.json(result);
    });
};

// User Subscribes
exports.subscribe = (req, res) => {
    // console.log(req.body);

    const {
        mail_email
    } = req.body;

    const email = new Mail({
        mail_email: mail_email
    });

    email.save()
        .then(() => {
            req.flash('success', 'Subscribed Successfully...');
            res.redirect('/#footer');
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

