const Koa = require('koa');

const app = new Koa();

var fs = require('fs');

var path = require('path');

const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);

const koaWebpack = require('koa-webpack');

const koaWebpackMiddelware = koaWebpack({
    compiler,
    dev: {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        chunks: false,
        colors: true
      }
    },
    hot: {}
});

app.use(koaWebpackMiddelware);

app.use(async(ctx, next) => {
    if(ctx.path === '/'){
      ctx.response.type = "text/html";
      ctx.response.body = fs.readFileSync(path.resolve(__dirname, 'index.html'));
    }
    await next();
})

app.listen(3000);
