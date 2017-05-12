const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
context: resolve(__dirname, '../../src'),
entry: [
'./index.js'
// the entry point of our app
],
output: {
path: resolve(__dirname, '../../dist'),
filename: '[name].bundle.js',
publicPath: '/',
sourceMapFilename: '[name].map'
},
devtool: 'inline-source-map',
devServer: {
hot: true,
// enable HMR on the server
contentBase: resolve(__dirname, 'dist'),
// match the output path
publicPath: '/'
// match the output `publicPath`
},
module: {
rules: [
// add rules !
],
},
plugins: [
new HtmlWebpackPlugin({
template: '../src/public/index.html',
chunksSortMode: 'dependency'
})
],
};