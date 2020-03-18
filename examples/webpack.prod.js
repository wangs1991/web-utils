const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "assets/css/[id].[hash].css",
            allChunks: true
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.NamedModulesPlugin()
    ],
})