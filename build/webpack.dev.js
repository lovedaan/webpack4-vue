const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require("./webpack.base.js");

module.exports = merge(config, {
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: 'vue-style-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'less-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        hot: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://api.douban.com/v2/movie',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    }
});