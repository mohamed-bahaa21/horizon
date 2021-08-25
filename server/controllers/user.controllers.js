const Landing = require('../models/Landing');
const Horizon = require('../models/horizon');
const Blog = require('../models/Blog');
const About = require('../models/About');

const Logger = require('../services/logger.service');
const logger = new Logger('horizon.controller');

// const { section } = require('../sample.data/landing.sections.model')
const { checkSectionContent, parse_json_html_return } = require('./json_html.controllers')

// landing local_data
exports.getLandingLocal = (req, res) => {

    let result = [];
    let html = ``;

    // in case json_html data were array of sections
    Landing.findOne({ section_index: 0 }).then(section => {
        let content = section.section_content;

        result.push({ "content": content });
        html += `<${content.tag} id="${content.id}" class="${content.classes}"> ${checkSectionContent(content.content)} </${content.tag}>`;

        if (parse_json_html_return == "html") {
            // res.send(html);
            res.render('local_index', {
                msgs: req.flash('success'),
                sections: html
            });
        } else {
            res.send(result);
        }
    });







    // section.section_content.map(section_content => {
    //     let content = checkSectionContent(section_content.content);
    //     result.push({ "tag": content.tag, "classes": content.classes, "content": content });
    //     html += `<${content.tag} id="${content.id}" class="${content.classes}"> ${checkSectionContent(content.content)} </${content.tag}>`;
    // });


    // in case json_html data were object of one section
    // Landing.findOne({ section_index: 0 }).then(section => {
    //     let section_content = checkSectionContent(section.section_content);
    //     console.log(section_content);
    //     result.push({ "section_content": section_content });
    //     html += `<${section_content.tag} id="${section_content.id}" class="${section_content.classes}"> ${checkSectionContent(section_content.content)} </${section_content.tag}>`;

    //     if (parse_json_html_return == "html") {
    //         // res.send(html);
    //         res.render('local_index', {
    //             msgs: req.flash('success'),
    //             sections: html
    //         });
    //     } else {
    //         res.send(result);
    //     }
    // });

};

// Landing Page
exports.getLanding = (req, res) => {
    Horizon.find().then((result) => {
        Blog.find().limit(3).then(blogs => {
            // console.log(blogs;      
            // console.log(result[4]);
            logger.info("return Landing PAGE & DATA", result);
            logger.info("return Blogs Data", blogs);

            res.render('index', {
                msgs: req.flash('success'),
                blogs: blogs,
                horizon: result[0],
                ld1: result[1],
                li1: result[2],
                ld2: result[6],
                li2: result[3],
                wv: result[4],
                ss: result[5],
                ld3: result[7],
                pi: result[8],
                ti: result[9]
            });
        });
    });
};

exports.getComingSoon = (req, res) => {
    logger.info("GET Coming soon page");
    res.render('coming-soon/index', {
        msgs: req.flash('success')
    });
};

exports.get404 = (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    logger.error("GET 404 Not Found", fullUrl);
    res.status(404).render('404/index');
};

// START User -> Brand Page
exports.getBrand = (req, res) => {
    const {
        brand
    } = req.params;

    // console.log(brand);
    logger.info("return brand PAGE & DATA", brand);

    if (brand == 'Zeiss') {
        res.render('brand', {
            msgs: req.flash('success'),
            test: `Zeiss`,
            title: `Zeiss`
        });
    } else if (brand == 'LTL') {
        res.render('brand', {
            msgs: req.flash('success'),
            test: 'LTL',
            title: `LTL`
        });

    } else if (brand == 'Divel') {
        res.render('brand', {
            msgs: req.flash('success'),
            test: 'Divel',
            title: `Divel`
        });

    } else if (brand == 'Roger_Bacon') {
        res.render('brand', {
            msgs: req.flash('success'),
            test: 'Roger Bacon',
            title: `Roger Bacon`
        });

    } else {
        res.render('brand', {
            msgs: req.flash('success'),
            test: 'Unknown',
            title: `Unknown`
        });
    }
};

exports.getProduct = (req, res) => {
    const {
        product
    } = req.params;

    // console.log(product);
    logger.info("return Product DATA", product);

    let products_arr = [
        "stock_lenses",
        "rx_lenses",
        "lens_coating_materials",
        "thickness_reduction",
        "finishing_services",
        "contact_lenses",
        "delivery",
    ]

    res.render('product', {
        msgs: req.flash('success'),
        title: product,
        test: product
    });

    // if (product == 'stock_lenses') {
    //     res.render('product_stock_lenses', {
    //         msgs: req.flash('success'),
    //         test: 'Stock Lenses'
    //     });
    // } else {
    //     res.render('product', {
    //         msgs: req.flash('success'),
    //         test: 'Hello Product'
    //     });
    // }
};
// ------------------------ END

// User -> About Page
exports.getAbout = (req, res) => {
    About.findById('6088f039ce64255fe8d24880').then((result) => {
        // console.log(result);

        res.render('about', {
            msgs: req.flash('success'),
            about: result
        });
    });
};

// User Get Blogs list
exports.getBlogs = (req, res) => {
    Blog.find().then(result => {
        // console.log(result);
        res.render('blogs', {
            msgs: req.flash('success'),
            blogs: result
        });
    });
};

// User Get Blog By ID route
exports.getBlog = (req, res) => {
    const blogID = req.params.id;

    Blog.findById(blogID).then(result => {
        Blog.find().limit(3).then(blogs => {
            // console.log(result);
            res.render('blog', {
                msgs: req.flash('success'),
                blog: result,
                blogs: blogs
            });
        });
    });
};