const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    // server配置
    devServer: {
        hot: true,
        host: '0.0.0.0',
        useLocalIp: true,
        open: 'Chrome',
        port: 80,
        inline: true,
        compress: true,
        overlay: true,
        index: 'index.html',
        disableHostCheck: true,
        contentBase: path.resolve(process.cwd(), 'build'),
        historyApiFallback:true
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                'css-hot-loader',
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }]
    }
});