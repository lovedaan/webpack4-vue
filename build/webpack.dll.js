const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vue: ['vue', 'vue-router', 'vuex']
    },
    output: {
        path: path.join(__dirname, '../dll/'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dll/', '[name].manifest.json'),
            name: '[name]'
        })
    ]
};