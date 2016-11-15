/**
 * Created by Neo on 2016/11/10.
 */
const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require("./webpack.config")
const config = require('./config/')

var compiler = Webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
    publicPath: config.publicPath,
    stats: {
        colors: true //显示不同的颜色区分打包的文件
    },
    proxy: { //代理服务器
        '*': {
            target: config.target,
            changeOrigin: true
        }
    }
})

server.listen(10086, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('http://localhost:10086' + config.publicPath)
})