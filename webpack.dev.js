const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // babel-polyfill always needed when use the async function at the top of layer;
    entry: ['babel-polyfill', './src/client/index.js'],
    stats: 'verbose',
    output: {
        libraryTarget: "var",
        library:"Client",
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'source-map',
    stats: 'verbose',
    mode: "development",
    // this babel_loader means afterwe build the dependency tree,
    // we will find all the files end in .js and exclude the directory node_modules
    //  and apply the babel_loader to them;
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