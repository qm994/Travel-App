const express = require("express");

const app = express();
// update to look for asset files from `src/client` to `dist`

/* this means we use the index.html in dist as the view
rather than the view in src folder */
app.get('/', function (req, res)
 { 
     res.sendFile('dist/index.html') 
    })