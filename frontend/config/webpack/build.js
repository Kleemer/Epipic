const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
    context: resolve(__dirname, '../../src'),
    entry: './index.js',
    output: {
    path: resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
},
    module: {
        rules: [
        // add loader rules !
        ],
    },
    plugins: [
    // add plugins !
    ],
};

new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
}),
new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
        screw_ie8: true,
        keep_fnames: true
    },
        compress: {
        screw_ie8: true
    },
        comments: false
})