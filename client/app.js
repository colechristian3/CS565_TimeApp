const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '.env')});
var express = require('express');
var app = express();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const date = require('date-and-time')
const bcrypt = require('bcrypt')


//Ejs for possible templating/server side rendering
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").json());

app.get("/", function(req, res) {
  res.render("pages/login");
});

app.get("/report", function(req, res) {
  res.render("pages/reportPage");
})

app.get("/map", function(req, res) {
  var currentTime = date.format(new Date(), 'hh:mm:ss A')
  res.render("pages/map", {time: currentTime});
})

app.post("/login-check", function(req, res) {
  const username = req.body.username
  const password = req.body.password
  //This is where the database will be called and bcrypt compare issued to see if login was valid. Also will asign session token
  //if login was good
  res.json("200")
})

app.get("/message", function(req, res) {
  //twilio sms message example, sends me (joe) a text message
  client.messages
  .create({
     body: 'Hey we can send people sms messages!',
     from: '+13158185951',
     to: '+19713376569'
   })
  .then(message => console.log(message.sid));
  res.render("pages/login");
})

app.listen(8080);
console.log('webserver listening on port 8080');