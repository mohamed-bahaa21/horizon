const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("../dbconnect");
const Users = require("../models/User");
const Chats = require("../models/Chat");

const app = express();
const router = express.Router();

router.get("/login", (req, res, next) => {
  if (req.session.loggedIn) {
    req.flash('info', "You're logged in already")
    res.redirect('/')
  } else {
    res.render('login', {
      msgs: req.flash('info')
    })
  }
});

router.post("/login", (req, res, next) => {
  Users.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        res.locals.username = user.username;
        next();
      } else {
        req.flash('info', "This username wasn't found")
        res.redirect('/login')
      }
    })
}, (req, res) => {
  req.session.loggedIn = true;
  req.session.username = res.locals.username;
  // console.log(req.session);
  req.flash('info', "Logged in successfully")
  res.redirect('/')
});

router.get("/logout", (req, res, next) => {
  // req.session.destroy((err) => { })
  req.session.loggedIn = false;
  req.flash('info', "Logged out successfully")
  res.redirect('/login')
})

router.get('/', (req, res, next) => {
  if (req.session.loggedIn) {
    // console.log(req.session);
    res.render('chats', {
      msgs: req.flash('info')
    });
  } else {
    req.flash('info', "login first")
    res.redirect('/login');
  }
})

router.get("/chats", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  let username = req.session.username;
  console.log(username);

  connectdb.then(db => {
    // let data = Chats.find({ message: "Anonymous" });
    Chats.find({ username: username }).then(chat => {
      res.json(chat);
    });
  });
});







// ================================================================
// API
router.post("/api/login", (req, res, next) => {
  Users.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        res.status(200).send(user.username);
      } else {
        res.status(404).send("No user was found");
      }
    })
}, (req, res) => {
  req.session.loggedIn = true;
  req.session.username = res.locals.username;
  // console.log(req.session);
  req.flash('info', "Logged in successfully")
  res.redirect('/')
});

router.get("/api/chats", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  let username = req.session.username;
  console.log(username);

  connectdb.then(db => {
    // let data = Chats.find({ message: "Anonymous" });
    Users.find().then(chats => {
      res.json(chats);
    });
  });
});


module.exports = router;
