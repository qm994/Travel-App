const express = require("express");

const app = express();
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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
