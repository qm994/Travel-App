const path = require("path") 
const webpack = require('webpack')
//Most of the plugins need to be required at the top of config file
// Then add plugin to the module.exports
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // after set the entry 
    entry: ['babel-polyfill', './src/client/index.js'],
    stats: 'verbose',
    mode: "production",
    output: {
        libraryTarget: "var",
        library:"Client",
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {// use the all these loaders apply to the files ended as .scss/css
                test: /\.scss$/,
                // all these loaders are chained together;
                // And the chained loader runs from RIGHT TO LEFT 
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }, 
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new WorkboxPlugin.GenerateSW(),

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