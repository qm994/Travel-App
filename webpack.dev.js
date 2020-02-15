const path = require("path") 
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//Most of the plugins need to be required at the top of config file
// Then add plugin to the module.exports



module.exports = {

    entry: './src/client/index.js',
    stats: 'verbose',
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    mode: "development",
    // this babel_loader means afterwe build the dependency tree,
    // we will find all the files end in .js and exclude the directory node_modules
    //  and apply the babel_loader to them;
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel_loader"
            }
        ]
    },  
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}