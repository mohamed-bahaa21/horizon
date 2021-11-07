const Horizon = require('../models/Horizon.model');
const Blog = require('../models/Blog.model');
const About = require('../models/About.model');
const Gallery = require('../models/Gallery.model');
const Mail = require('../models/Mail.model');
const OnlineOrder = require('../models/OnlineOrder.model');

const {
    GET_HORIZON_SECTION_CONTENT,
    POST_HORIZON_SECTION_CONTENT,
    GET_HORIZON_SEO_DATA,
    POST_HORIZON_SEO_DATA
} = require('../queries/api.queries')

const Logger = require('../services/logger.service');
const logger = new Logger('horizon.controller');

const scetionsId = {
    hero: '6165f63fb58cb67e24ac85f9',
    ld1: '6165f63fb58cb67e24ac85fa',
    li1: '6165f63fb58cb67e24ac85fb',
    li3: '6165f63fb58cb67e24ac8603',
    ld2: '6165f63fb58cb67e24ac85ff',
    li2: '6165f63fb58cb67e24ac85fc',
    wv: '6165f63fb58cb67e24ac85fd',
    ss: '6165f63fb58cb67e24ac85fe',
    ld3: '6165f63fb58cb67e24ac8600',
    pi: '6165f63fb58cb67e24ac8601',
    ti: '6165f63fb58cb67e24ac8602',
}

exports.getSectionData = (req, res) => {
    GET_HORIZON_SECTION_CONTENT(req, res, req.params.sectionId);
};

exports.postSectionData = (req, res) => {
    switch (req.body.sectionID) {
        case scetionsId.hero:
            var data = {
                hero_name: req.body.hero_name,
                hero_parag_1: req.body.hero_parag_1,
                hero_header_1: req.body.hero_header_1,
                hero_parag_2: req.body.hero_parag_2,
                hero_link_1_name: req.body.hero_link_1_name,
                hero_link_1_href: req.body.hero_link_1_href,
                design_state: req.body.design_state,
                design_img: req.body.design_img,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.ld1:
            var data = {
                prog_card_1_img: req.body.prog_card_1_img,
                prog_card_1_link: req.body.prog_card_1_link,
                prog_card_1_type: req.body.prog_card_1_type,
                prog_card_1_header: req.body.prog_card_1_header,
                prog_card_2_img: req.body.prog_card_2_img,
                prog_card_2_link: req.body.prog_card_2_link,
                prog_card_2_type: req.body.prog_card_2_type,
                prog_card_2_header: req.body.prog_card_2_header,
                prog_card_3_img: req.body.prog_card_3_img,
                prog_card_3_link: req.body.prog_card_3_link,
                prog_card_3_type: req.body.prog_card_3_type,
                prog_card_3_header: req.body.prog_card_3_header,
                prog_card_4_img: req.body.prog_card_4_img,
                prog_card_4_link: req.body.prog_card_4_link,
                prog_card_4_type: req.body.prog_card_4_type,
                prog_card_4_header: req.body.prog_card_4_header,
            }
            console.log(req.body);
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.li1:
            var data = {
                li1_img: req.body.li1_img,
                li1_parag_1: req.body.li1_parag_1,
                li1_parag_2: req.body.li1_parag_2,
                li1_parag_3: req.body.li1_parag_3,
                li1_parag_4: req.body.li1_parag_4,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.li3:
            var data = {
                li3_parag_1: req.body.li3_parag_1,
                li3_parag_2: req.body.li3_parag_2,
                li3_parag_3: req.body.li3_parag_3,
                li3_parag_4: req.body.li3_parag_4,
                li3_parag_5: req.body.li3_parag_5,
                li3_parag_6: req.body.li3_parag_6,
                li3_img: req.body.li3_img,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.ld2:
            var data = {
                ld2_design_1_header: req.body.ld2_design_1_header,
                ld2_design_1_sub_header: req.body.ld2_design_1_sub_header,
                ld2_design_1_img: req.body.ld2_design_1_img,
                ld2_design_1_content_before: req.body.ld2_design_1_content_before,
                ld2_design_1_content_after: req.body.ld2_design_1_content_after,
                ld2_design_2_header: req.body.ld2_design_2_header,
                ld2_design_2_sub_header: req.body.ld2_design_2_sub_header,
                ld2_design_2_img: req.body.ld2_design_2_img,
                ld2_design_2_content_before: req.body.ld2_design_2_content_before,
                ld2_design_2_content_after: req.body.ld2_design_2_content_after,
                ld2_design_3_header: req.body.ld2_design_3_header,
                ld2_design_3_sub_header: req.body.ld2_design_3_sub_header,
                ld2_design_3_img: req.body.ld2_design_3_img,
                ld2_design_3_content_before: req.body.ld2_design_3_content_before,
                ld2_design_3_content_after: req.body.ld2_design_3_content_after,
                ld2_design_4_header: req.body.ld2_design_4_header,
                ld2_design_4_sub_header: req.body.ld2_design_4_sub_header,
                ld2_design_4_img: req.body.ld2_design_4_img,
                ld2_design_4_content_before: req.body.ld2_design_4_content_before,
                ld2_design_4_content_after: req.body.ld2_design_4_content_after,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.li2:
            var data = {
                li2_image: req.body.li2_image,
                li2_lft_parag_1_header: req.body.li2_lft_parag_1_header,
                li2_lft_parag_1_content: req.body.li2_lft_parag_1_content,
                li2_lft_parag_2_header: req.body.li2_lft_parag_2_header,
                li2_lft_parag_2_content: req.body.li2_lft_parag_2_content,
                li2_lft_parag_3_header: req.body.li2_lft_parag_3_header,
                li2_lft_parag_3_content: req.body.li2_lft_parag_3_content,
                li2_rght_parag_1_header: req.body.li2_rght_parag_1_header,
                li2_rght_parag_1_content: req.body.li2_rght_parag_1_content,
                li2_rght_parag_2_header: req.body.li2_rght_parag_2_header,
                li2_rght_parag_2_content: req.body.li2_rght_parag_2_content,
                li2_rght_parag_3_header: req.body.li2_rght_parag_3_header,
                li2_rght_parag_3_content: req.body.li2_rght_parag_3_content,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.wv:
            var data = {
                wv_desc: req.body.wv_desc,
                wv_link: req.body.wv_link
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.ss:
            var data = {
                ss_desc: req.body.ss_desc
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.ld3:
            var data = {
                img_1_title: req.body.img_1_title,
                img_1_sub: req.body.img_1_sub,
                img_1_link: req.body.img_1_link,
                img_2_title: req.body.img_2_title,
                img_2_sub: req.body.img_2_sub,
                img_2_link: req.body.img_2_link,
                img_3_title: req.body.img_3_title,
                img_3_sub: req.body.img_3_sub,
                img_3_link: req.body.img_3_link,
                img_4_title: req.body.img_4_title,
                img_4_sub: req.body.img_4_sub,
                img_4_link: req.body.img_4_link,
                img_5_title: req.body.img_5_title,
                img_5_sub: req.body.img_5_sub,
                img_5_link: req.body.img_5_link,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.pi:
            var data = {
                pi_desc: req.body.pi_desc,
                pi_item_1_img: req.body.pi_item_1_img,
                pi_item_1_num: req.body.pi_item_1_num,
                pi_item_1_title: req.body.pi_item_1_title,
                pi_item_2_img: req.body.pi_item_2_img,
                pi_item_2_num: req.body.pi_item_2_num,
                pi_item_2_title: req.body.pi_item_2_title,
                pi_item_3_img: req.body.pi_item_3_img,
                pi_item_3_num: req.body.pi_item_3_num,
                pi_item_3_title: req.body.pi_item_3_title,
                pi_item_4_img: req.body.pi_item_4_img,
                pi_item_4_num: req.body.pi_item_4_num,
                pi_item_4_title: req.body.pi_item_4_title,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
        case scetionsId.ti:
            var data = {
                ti_desc: req.body.ti_desc,
                ti_item_1_title: req.body.ti_item_1_title,
                ti_item_1_content: req.body.ti_item_1_content,
                ti_item_2_title: req.body.ti_item_2_title,
                ti_item_2_content: req.body.ti_item_2_content,
                ti_item_3_title: req.body.ti_item_3_title,
                ti_item_3_content: req.body.ti_item_3_content,
                ti_item_4_title: req.body.ti_item_4_title,
                ti_item_4_content: req.body.ti_item_4_content,
                ti_item_5_title: req.body.ti_item_5_title,
                ti_item_5_content: req.body.ti_item_5_content,
            }
            POST_HORIZON_SECTION_CONTENT(req, res, req.body.sectionID, data)
            break;
    }
};


exports.getSeoData = (req, res) => {
    GET_HORIZON_SEO_DATA(req, res, req.params.page_id);
};

exports.postSeoData = (req, res) => {
    const data = {
        page_id: req.body.page_id,
        page_title: req.body.page_title,
        page_desc: req.body.page_desc,
        page_robots: req.body.page_robots,
        page_keywords: req.body.page_keywords,
        card_site_name: req.body.card_site_name,
        card_title: req.body.card_title,
        card_desc: req.body.card_desc,
        card_img: req.body.card_img,
        card_url: req.body.card_url,
        card_img_alt: req.body.card_img_alt,
        twitter_card: req.body.twitter_card,
    };
    POST_HORIZON_SEO_DATA(req, res, req.body.page_id, data);
};

















// =========================================================
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













// =========================================================
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




















// =========================================================
// FUNCTIONALITIES
// =========================================================
// Admin gets Gallery
exports.gallery = (req, res) => {
    Gallery.find({}, {
        __v: 0
    }).then((result) => {
        res.json(result);
    });
};












// =========================================================
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






// =========================================================
// Admin gets maillist
exports.mailList = (req, res) => {
    Mail.find({}, {
        _id: 0,
        __v: 0
    }).then((result) => {
        res.json(result);
    });
};











// =========================================================
// User Subscribes
exports.subscribe = (req, res) => {
    // console.log(req.body);

    const {
        url,
        mail_email
    } = req.body;

    const email = new Mail({
        mail_email: mail_email
    });

    email.save()
        .then(() => {
            req.flash('success', 'Subscribed Successfully...');
            res.redirect(`${url}`)
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};
exports.onlineOrdering = (req, res) => {
    // console.log(req.body);
    const {
        name,
        email,
        phone,
        message
    } = req.body;

    const onlineOrder = new OnlineOrder({
        name: name,
        email: email,
        phone: phone,
        message: message
    });

    onlineOrder.save()
        .then(() => {
            req.flash('success', 'Online order was send successfully...');
            res.redirect('/online_ordering')
        })
        .catch((err) => res.status(400).json('Error: ' + err));
};

