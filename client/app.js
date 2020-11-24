const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
var express = require('express');
var app = express();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const date = require('date-and-time')
const bcrypt = require('bcrypt')

var mockData =
{
  id: "192571027510",
  firstName: "Dan",
  lastName: "Ryan",
  isClockedIn: false,
  currentClockinTime: null,
  lastClockOutTime: null,
  currentLocation: {
    longitude: 124.1515,
    latitude: 241.10581
  },
  jobs: [
    {
      id: "13001755210489",
      name: "The gig 1",
      pay: 24.25,
      location: {
        street: "1244 salmon st",
        city: "Portland",
        state: "OR",
        zip: "97215",
        longitude: 124.10555,
        latitude: 241.020202
      }
    },
    {
      id: "1792571925712957",
      name: "The gig 2",
      pay: 24.25,
      location: {
        street: "1244 salmon st",
        city: "Portland",
        state: "OR",
        zip: "97215",
        longitude: 124.10555,
        latitude: 241.020202
      }
    }
  ],
  payHistory: [
    [
      {
        date: "11/8/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/9/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/10/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/11/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/12/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/13/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      {
        date: "11/14/2020",
        job: "The gig 1",
        in: "12:30 PM",
        out: "8:30 PM",
        reg: 8,
        ot: 0,
        total: 8,
        grossPay: 194.00
      },
      totals = {
        totalPay: "1359.00",
        totalHours: 56,
        totalOT: 0,
        totalCombined: 56
      }
    ]
  ]
}


//Ejs for possible templating/server side rendering
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", function (req, res) {
  res.render("pages/login");
});

app.get("/report", function (req, res) {
  res.render("pages/reportPage", { data: mockData });
})

app.get("/map", function (req, res) {
  var currentTime = date.format(new Date(), 'hh:mm:ss A')
  res.render("pages/map", { time: currentTime, data: mockData });
})

app.post("/clock-in", function (req, res) {
  var currentTime = date.format(new Date(), 'hh:mm:ss A')
  mockData.isClockedIn = true
  mockData.currentClockinTime = currentTime
  res.render("pages/map", { time: currentTime, data: mockData })
})

app.post("/login-check", function (req, res) {
  const username = req.body.username
  const password = req.body.password
  //This is where the database will be called and bcrypt compare issued to see if login was valid. Also will asign session token
  //if login was good
  res.json("200")
})

app.get("/message", function (req, res) {
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