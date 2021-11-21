const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("../dbconnect");
const Users = require("../models/User");
const Chats = require("../models/Chat");

const app = express();
const router = express.Router();


// socket.emit("chat message", { username: username, sender: username, message: req.body.message });

router.get("/signup", (req, res, next) => {
  if (req.session.loggedIn) {
    req.flash('info', "You're logged in already")
    res.redirect('/')
  } else {
    res.render('signup', {
      msgs: req.flash('info')
    })
  }
});

router.post("/signup", (req, res, next) => {
  res.redirect('/signup/verify')
  // let otp = 123456
  // console.log("Phone = " + req.body.phone);
  // console.log("Subject = " + "Signup Verification Code");
  // console.log("OTP_Message = " + otp);

  // var params = {
  //   Message: otp,
  //   PhoneNumber: req.body.phone,
  //   MessageAttributes: {
  //     'AWS.SNS.SMS.SenderID': {
  //       'DataType': 'String',
  //       'StringValue': "Signup Verification Code"
  //     }
  //   }
  // };
  // var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

  // publishTextPromise.then(
  //   function (data) {

  //     res.end(JSON.stringify({ MessageID: data.MessageId }));
  //   }).catch(
  //     function (err) {
  //       res.end(JSON.stringify({ Error: err }));
  //     });
});

router.get('/signup/verify', (req, res, next) => {
  res.render('verify', {
    msgs: req.flash('info')
  })
})

router.post('/signup/verify', (req, res, next) => {
  req.flash('info', "Setup you account")
  res.redirect('/signup/setup')
})

router.get('/signup/setup', (req, res, next) => {
  res.render('setup', {
    msgs: req.flash('info')
  })
})


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

router.get("/api/users", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  connectdb.then(db => {
    // let data = Chats.find({ message: "Anonymous" });
    Users.find().then(chats => {
      res.json(chats);
    });
  });
});

router.get("/api/users/:username", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  let username = req.params.username;

  connectdb.then(db => {
    // let data = Chats.find({ message: "Anonymous" });
    Users.findOne({ username: username }).populate('chat').then(user => {
      res.json(user);
    });
  });
});

router.post("/api/users/:username", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  let username = req.params.username;

  console.log("Admin sent a message");
  Users.findOne({ username: username }).then(user => {
    // console.log(chatMessage);
    let chatMessage = new Chats({ username: req.body.username, sender: req.body.sender, message: req.body.message });
    chatMessage.save().then(msg => {
      user.chat.push(msg._id);
      user.save()
    })
  })
});

module.exports = router;
