const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var fetch = require("node-fetch");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

// All the api functions 
let getCoordinates = require("./geoNamesAPI");
let getWeather = require("./darkSkyAPI");

/* this means we use the index.html in dist as the view
rather than the view in src folder */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


var inputCityName;
var userCurrentTime;
var departureTime;
var durationDays;
var decideFuture;
app.post("/coords", async function(req, res){
    inputCityName = req.body.city;
    userCurrentTime = req.body.userCurrentTime;
    departureTime = req.body.departureTime;
    durationDays = req.body.durationDays;
    decideFuture = req.body.decideFuture;

    // console.log(`The posted data are ${inputCityName},
    // ${userCurrentTime},
    // ${departureTime},
    // ${durationDays},
    // ${decideFuture}`);
    getCoordinates(inputCityName)
    .then(value => getWeather(value[0], value[1], departureTime, userCurrentTime))
    .then(value => console.log(value));
});

// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});



