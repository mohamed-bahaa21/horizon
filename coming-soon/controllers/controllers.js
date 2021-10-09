const Mail = require("../models/Mail");

exports.getComingSoon = (req, res, next) => {
  res.render('coming-soon/index', {
    msgs: req.flash('success')
  })
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