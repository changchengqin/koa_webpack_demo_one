require('babel-polyfill');
require('babel-core/register')({
    presets: ['stage-3']
});
//
// /*采用chokidar实现后端代码hot reloading*/
// const chokidar = require('chokidar');

var appExports = require('./app.js');

// const watcher = chokidar.watch(
//     [
//         './server'
//         , './start.js'
//         , './app.js'
//         , './webpack.config.js'
//     ]
//     , {
//         ignored: [
//
//         ]
//     }
// );
//
// watcher.on('ready', function () {
//     console.log("chokidar readyed.");
//     watcher.on('all', function () {
//         console.log("Clearing module cache from server");
//         Object.keys(require.cache).forEach(function (file) {
//             if ((
//                 /controllers/.test(file)
//                 || /models/.test(file)
//                 || /config/.test(file)
//                 || /static/.test(file)
//                 || /templates/.test(file)
//                 || /middleware/.test(file)
//                 || /start.js/.test(file)
//                 || /app.js/.test(file)
//                 || /webpack.client.config.js/.test(file)
//                 || /webpack.config.js/.test(file)
//             )
//                 && file.indexOf('node_modules') === -1) {
//                 delete require.cache[file];
//                 appExports.hotAcceptCallback();
//             }
//         });
//     });
// });

/*采用webpack实现后端代码hot reload*/
//缺点：静态资源不好管理（一系列的路径问题）
/*1、运行 webpack --watch --hot 命令*/
/*2、新打开一个终端 运行 node build/server_bundle.js 命令*/
// var appExports = require('./app.js');
//
// if (module.hot) {
//     module.hot.accept('./app.js', async function() {
//         while (appExports.app.middleware.length) {
//             await appExports.app.middleware.pop();
//         }
//         await console.log(appExports.app.middleware.length);
//         await appExports.initMiddlewares();
//     });
// }
