const express = require("express");
const request = require("request");
const app = express();

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
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', "*");
//     next();
//   });

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

var geoNamesData  = {};
app.get("/coordData", function(req, res){
    
})
