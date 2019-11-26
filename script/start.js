'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.js');
const os = require('os')

const pl = os.platform();
const openBrowser = pl === 'win32' ? 'Chrome' : 'google chrome';

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: openBrowser,
    stats: {
        colors: true,
    },
    historyApiFallback: true
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8899, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:80');
});