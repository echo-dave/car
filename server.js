require("dotenv").config();

//import models
const db = require("./database/models");
//check environment
const env = process.env.NODE_ENV || "development";

//express
const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;
//static options
let options = {
    dotfiles: "ignore",
    etag: false,
    extensions: ["html"],
    redirect: false
  };

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static route
app.use(express.static("public", options));
require("./routes/api-routes.js")(app);
//404 not found
app.use(function(req, res) {
    res.status(400).sendFile(__dirname + "/public/404.html");
  });

//model sync and start listening express webserver
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("listening " + PORT);
      console.log("environment: " + env);
    });
  });