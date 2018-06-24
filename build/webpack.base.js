const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.NODE_ENV;
//console.log('环境变量是：', ENV);
module.exports = {
    mode: ENV,
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'common': path.join(__dirname, '../src/common'),
            'components': path.join(__dirname, '../src/components'),
            'base': path.join(__dirname, '../src/base'),
            'api': path.join(__dirname, '../src/api')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            include: [path.join(__dirname, '../src')],
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'images/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: 'index.html',
            inject: 'body'
        }),

    ]
};