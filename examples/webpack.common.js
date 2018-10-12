const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const pages = require('./menu')

module.exports = {
    entry: (function () {
        let ret = {
            app: './index.js'
        }
        let chunk

        pages.forEach(n => {
            chunk = n.uri.split('.')[0]

            ret[chunk] = './pages/' + chunk + '/' + chunk + '.js'
        })

        return ret
    })(),
    output: {
        filename: "assets/js/[name].[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/dist/index.html',
            template: __dirname + "/index.html",
            title: 'web-utils examples',
            chunks: ['app'],
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true//删除空格
            }
        }),
        ...(function () {
            let ret = []
            let folder

            pages.forEach(n => {
                folder = n.uri.split('.')[0]

                ret.push(new HtmlWebpackPlugin({
                    filename: __dirname + '/dist/pages/' + n.uri,
                    template: __dirname + '/pages/' + folder + '/' + n.uri,
                    chunks: [folder],
                    minify:
                        {
                            removeComments: true,//删除注释
                            collapseWhitespace:
                                true//删除空格
                        }
                }))
            })

            return ret
        })(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}