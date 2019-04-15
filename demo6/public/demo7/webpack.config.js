/**
 * DEMO 7
 **/

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var rootDir = __dirname;
var srcDir = rootDir + "/../demo6_final";
var distDir = rootDir;
var scriptsDir = "/scripts";

module.exports = {
    context: rootDir, // a base directory to resolve the "entry"
    entry: {
        di: srcDir + scriptsDir + "/di.js",
        ui: srcDir + scriptsDir + "/ui.js",
        bl: srcDir + scriptsDir + "/bl.js",
        dl: srcDir + scriptsDir + "/dl.js"
    },
    output: {
        path: distDir + scriptsDir,
        filename: "[name].js" // [name] means we are going to use the "key" value of each entry as the bundle file name
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /(node_modules|tmp)/, loader: 'babel-loader'}
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index',
            filename: '/index.html', // relative path from "output" directory
            template: srcDir + '/index.html' // source file
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};
