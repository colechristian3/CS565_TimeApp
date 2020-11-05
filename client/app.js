var express = require('express');
var app = express();

//Ejs for possible templating/server side rendering
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("pages/login");
});

app.listen(8080);
console.log('webserver listening on port 8080');