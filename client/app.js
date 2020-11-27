const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
var express = require('express');
var app = express();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const date = require('date-and-time')
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')

var mockData =
{
  id: "192571027510",
  firstName: "Dan",
  lastName: "Ryan",
  isClockedIn: false,
  currentClockInTime: null,
  clockInTimeObj: null,
  lastClockOutTime: null,
  badDistance: false,
  currentLocation: {
    lng: 124.1515,
    lat: 241.10581
  },
  currentJob: null,
  email: "someemail@gmail.com",
  phoneNumber: "+19713376569",
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
        coords: {
          lng: -122.6537251,
          lat: 45.5048588
        }
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
        coords: {
          lng: 124.10555,
          lat: 241.020202
        }
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

async function sendTextMessage(number, message) {
  //twilio sms message example, sends me (joe) a text message
  client.messages
    .create({
      body: message,
      from: '+13158185951',
      to: number
    })
    .then(message => console.log(message.sid));
}

//From google docs on calculating straight line distance given two positions
function distance(loc1, loc2) {
  var R = 3958.8; // Radius of the Earth in miles
  var rlat1 = loc1.lat * (Math.PI / 180); // Convert degrees to radians
  var rlat2 = loc2.lat * (Math.PI / 180); // Convert degrees to radians
  var difflat = rlat2 - rlat1; // Radian difference (latitudes)
  var difflon = (loc2.lng - loc1.lng) * (Math.PI / 180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
  return d;
}

//Ejs for possible templating/server side rendering
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("pages/login");
});

app.get("/report", function (req, res) {
  res.render("pages/reportPage", { data: mockData });
})

app.get("/map", function (req, res) {
  var currentTime = date.format(new Date(), 'hh:mm:ss A')
  res.render("pages/map", { time: currentTime, data: mockData, worked: null });
})

app.post("/clock-in", function (req, res) {
  mockData.currentLocation.lng = req.cookies.lng
  mockData.currentLocation.lat = req.cookies.lat
  var selectedJob = mockData.jobs.filter(job => job.name === req.body.job)
  var dist = distance(selectedJob[0].location.coords, mockData.currentLocation)

  if (dist > 2) {
    mockData.badDistance = true
    res.render("pages/map", { time: inTime, data: mockData, worked: null })
  }
  else {
    mockData.badDistance = false
    var currentTime = new Date()
    var inTime = date.format(currentTime, 'hh:mm:ss A')
    mockData.clockInTimeObj = currentTime
    mockData.isClockedIn = true
    mockData.currentClockInTime = inTime
    mockData.currentJob = req.body.job
    res.render("pages/map", { time: inTime, data: mockData, worked: null })
  }

})

app.post("/clock-out", function (req, res) {
  var currentTime = new Date()
  var outTime = date.format(currentTime, 'hh:mm:ss A')
  var hoursWorked = date.subtract(currentTime, mockData.clockInTimeObj)
  mockData.isClockedIn = false
  mockData.currentClockInTime = null
  mockData.currentJob = null
  mockData.lastClockOutTime = currentTime
  res.render("pages/map", { time: outTime, data: mockData, worked: { hours: Number(hoursWorked.toHours()).toFixed(2) } })
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