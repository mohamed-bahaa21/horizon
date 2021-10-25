const Horizon = require('../models/Horizon.model');
const Seo = require('../models/Seo.model');
const Blog = require('../models/Blog.model');
const About = require('../models/About.model');

const Logger = require('../services/logger.service');
const logger = new Logger('horizon.controller');

pages = [
    'landing',
    'brands',
    'products',
    'accessories',
    'news',
    'about',
    'online ordering'
]

// Landing Page
exports.getLanding = (req, res) => {
    Horizon.find().sort({ section_index: 1 }).then((result) => {
        Blog.find().limit(3).then(blogs => {
            Seo.findOne({ page_id: 'landing' }).then(seo => {
                // console.log(blogs;
                // console.log(result[4]);
                logger.info("return Landing PAGE & DATA");
                logger.info("return Blogs Data");
                let sections = [];

                // result.map(section => {
                //     sections += section.section_name
                // })
                // res.send(sections)

                // res.send(result[0])

                res.render('pages/landing', {
                    msgs: req.flash('success'),
                    seo: seo,
                    blogs: blogs,
                    horizon: result[0],
                    ld1: result[1],
                    li1: result[2],
                    li3: result[10],
                    ld2: result[6],
                    li2: result[3],
                    wv: result[4],
                    ss: result[5],
                    ld3: result[7],
                    pi: result[8],
                    ti: result[9]
                })
            })
        });
    })
};

// START User -> Brand Page
exports.getBrand = (req, res) => {
    const {
        brand
    } = req.params;

    // console.log(brand);
    logger.info("return brand PAGE & DATA");

    res.render('pages/brand', {
        msgs: req.flash('success'),
        page_title: "Horizon | " + brand,
        seo: null,
        brand: brand
    })
};

exports.getProduct = (req, res) => {
    const {
        product
    } = req.params;

    // console.log(product);
    logger.info("return Product DATA");

    let products_arr = [
        "stock_lenses",
        "rx_lenses",
        "lens_coating_materials",
        "thickness_reduction",
        "finishing_services",
        "contact_lenses",
        "delivery",
    ]

    res.render('pages/product', {
        msgs: req.flash('success'),
        page_title: "Horizon | " + product,
        seo: null,
        title: product,
        test: product
    });
};
// ------------------------ END

// User -> About Page
exports.getAbout = (req, res) => {
    About.findById('6088f039ce64255fe8d24880').then((result) => {
        // console.log(result);

        res.render('pages/about', {
            msgs: req.flash('success'),
            page_title: "Horizon | About",
            seo: null,
            about: result
        });
    });
};

// User Get Blogs list
exports.getNews = (req, res) => {
    Blog.find().then(result => {
        // console.log(result);
        res.render('pages/news', {
            msgs: req.flash('success'),
            page_title: "Horizon | News",
            seo: null,
            blogs: result
        });
    });
};

// User Get Blog By ID route
exports.getNew = (req, res) => {
    const blogID = req.params.id;

    Blog.findById(blogID).then(result => {
        Blog.find().limit(3).then(blogs => {
            // console.log(result);
            res.render('pages/new', {
                msgs: req.flash('success'),
                page_title: "News | " + blog.title,
                seo: null,
                blog: result,
                blogs: blogs
            });
        });
    });
};

// User Get Online Ordering
exports.getOnlineOrdering = (req, res) => {
    res.render('pages/online_ordering', {
        msgs: req.flash('success'),
        page_title: "Horizon | Online Ordering",
        seo: null,
    });
};


exports.get400 = (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    logger.error("GET 400 Bad Request", fullUrl);
    res.status(400).render('errors/400');
};
exports.get404 = (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    logger.error("GET 404 Not Found", fullUrl);
    res.status(404).render('errors/404');
};
exports.get500 = (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    logger.error("GET 500 Internal Server Error", fullUrl);
    res.status(500).render('errors/500');
};