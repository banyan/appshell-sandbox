const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.config.prod.js')
config.plugins = [new BundleAnalyzerPlugin()]

module.exports = config
