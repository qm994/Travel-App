const express = require("express");
const request = require("request");
// var proxy = require('express-http-proxy');
const app = express();
//app.use('/proxy', proxy("https://api.darksky.net/forecast/a1a23e327c352a8dcfb8a6078531a738"));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());


app.use(express.static('dist'));
console.log(__dirname);

/* this means we use the index.html in dist as the view
rather than the view in src folder */
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});


//
// 1. Set up the route for `Geonames` API
//
app.get("/geoNames/", function(req, res){
    request("https://api.darksky.net/forecast/a1a23e327c352a8dcfb8a6078531a738/42.3601,-71.0589",
        function(error, response, body){
            if(!error && response.statusCode === 200) {
                res.send(body);
            } else{
                console.log(`The failed error is ${error}`)
            }
        });
    });

