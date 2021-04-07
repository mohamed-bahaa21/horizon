const Mentor = require('../models/mentor')

exports.getLanding = (req, res, next) => {
    res.render('mentor/landing', {
        path: "/landing",
        title: "Storce- Learn, practice, and get Ready to work in the Real World Market",
        err_msg: req.flash('error'),
        succ_msg: req.flash('success')
    })
}

exports.getList = (req, res, next) => {
    Mentor.find().then(result => {
        res.render('mentor/waitlist', {
            trainees: result
        })
    })

}