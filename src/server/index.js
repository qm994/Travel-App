const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var fetch = require("node-fetch");

const geoNamesBaseURL = `http://api.geonames.org/search?lang=en&username=${process.env.geonamesUserName}&type=json&name=`
const darkSkyBaseURL = `http://api.darksky.net/forecast/${process.env.darkSkyAPIKey}`


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());


app.use(express.static('dist'));
console.log(__dirname);

/* this means we use the index.html in dist as the view
rather than the view in src folder */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.post("/coords", function(req, res){
    console.log(`The request of city name is ${req.body.city}`);
    const geonamesURL = `${geoNamesBaseURL}${req.body.city}`;
    console.log(`The url to geoNames is ${geonamesURL}`);
});

// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});



