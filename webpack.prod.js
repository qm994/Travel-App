const path = require("path") 
const webpack = require('webpack')
//Most of the plugins need to be required at the top of config file
// Then add plugin to the module.exports
const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
    // after set the entry 
    entry: './src/client/index.js',
    mode: "production",
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}