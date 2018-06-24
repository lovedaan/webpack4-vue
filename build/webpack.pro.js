const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const config = require("./webpack.base.js");
const publicPath = '';
/*
        devtool 开启调试代码
        eval: 速度最快，是能看出是什么文件第几行输出的，查看的是打包后的代码
        source-map: 速度一般， 能定位到源文件没被编译前的文件
     */
module.exports = merge(config, {
    devtool: false,
    output: {
        publicPath: publicPath,
        chunkFilename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, '../dist/')),
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, '../dll/vue.manifest.json'))
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new AddAssetHtmlPlugin([{
            filepath: path.join(__dirname, '../dll/vue.dll.js'),
            publicPath: publicPath + 'js/',
            outputPath: './js/',
            hash: true,
            includeSourcemap: false
        }])
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'vendor', // 任意命名
                    minSize: 0 // 只要超出0字节就生成一个新包
                }
            }
        }
    }
});