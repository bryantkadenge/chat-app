var express = require ("express");
var http = require ("http");

var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);

server.listen(3333, function () {
    console.log("The development server is running at port 3333.");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/assetts/styles.css", function(req, res){
    res.sendFile(__dirname + "/assetts/styles.css");
});

io.on("connection",function(socket){
    console.log("A user is online");
    
    socket.on("disconnect", function(){
        console.log("A user has disconnected!")
    });
});