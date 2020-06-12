const merge = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');

module.exports = merge(config, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        open: true,
        port: 9200
    }
})