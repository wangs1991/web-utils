const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'weber-utils': './src/index.js'
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, 'dist'),
        library: 'Utils',
        libraryTarget: 'this'
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'dist']),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}