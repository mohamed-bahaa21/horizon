const connect = require("../dbconnect"); //database connections
const Chat = require("../models/Chat");
const User = require("../models/User");

// ======================================================================
// socket.io event listener
module.exports = function (socket) {
    socket.on("connection", socket => {
        var username = socket.request.session.username;
        console.log("user connected");
        socket.send('message', username);

        socket.on("disconnect", function () {
            console.log("user disconnected");
        });

        //Someone is typing
        socket.on("typing", data => {
            socket.broadcast.emit("notifyTyping", {
                user: data.user,
                message: data.message
            });
        });

        //when soemone stops typing
        socket.on("stopTyping", () => {
            socket.broadcast.emit("notifyStopTyping");
        });

        socket.on("chat message", function (msg) {
            console.log("message: " + msg);

            //broadcast message to everyone in port:5000 except yourself.
            socket.broadcast.emit("received", { message: msg, username: username });

            //save chat to the database
            connect.then((db) => {
                console.log("connected correctly to the server");
                User.findOne({ username: username }).then(user => {
                    // console.log(chatMessage);
                    let chatMessage = new Chat({ username: username, sender: username, message: msg });
                    chatMessage.save().then(msg => {
                        user.chat.push(msg._id);
                        user.save()
                    })
                })
            });
        });
    });
}