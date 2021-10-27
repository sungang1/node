"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const BaseRoutes_1 = require("./app/BaseRoutes");
let ejs = require('ejs');
const path = require("path");
const process = require("process");
const http = require("http");
var logger = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
// var app2 = express();
// var port2 = process.env.PORT || 8099; // 444
// var cookieParser = require('cookie-parser');
// app2.set("port", port2);
// app2.use(compression());
// app2.use(cookieParser());
// app2.set('views', path.join(__dirname, 'views/app'));
// app2.engine('html', ejs.__express);
// app2.set('view engine', 'html');
// app2.use(logger('dev'));
// app2.use(bodyParser.json({ limit: '100mb' }));
// app2.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
// // app2.use(express.json());
// // app2.use(express.urlencoded({ extended: false }));
// app2.use(express.static(path.join(__dirname, 'views/app')));
// app2.use(function (req, res, next) {
//     console.log(req.url);
//     // if (req.connection.remoteAddress.toString() == "::1") {
//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // }
//     next();
// });
// app2.use(BaseRoutes);
// app2.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.send('出错了！' + err.status);
// });
// var httpServer2 = http.createServer(app2);
// httpServer2.listen(port2);
// console.log("Node app is running at localhost:" + port2);
var app = express();
var port = process.env.PORT || 8081; // 444
var cookieParser = require('cookie-parser');
app.set("port", port);
app.use(compression());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views/app'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
//  app.use(express.json());
//  app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views/pc')));
app.use(function (req, res, next) {
    console.log(req.url);
    // if (req.connection.remoteAddress.toString() == "::1") {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // }
    next();
});
app.use(BaseRoutes_1.BaseRoutes);
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('出错了！' + err.status);
});
var httpServer = http.createServer(app);
httpServer.listen(port);
console.log("Node app is running at localhost:" + port);
app.use(logger('dev'));
//app2.use(logger('dev'))
// app.use(logger('dev'));
// var privateKey = fs.readFileSync('e:\\MyWork\\mOAts\\mOAts\\server\\keys\\private.pem', 'utf8');
// var certificate = fs.readFileSync('e:\\MyWork\\mOAts\\mOAts\\server\\keys\\file.crt', 'utf8');
// 下面是ssl配置
// var privateKey = fs.readFileSync(path.join(__dirname, '../keys/wfxytop.key'), 'utf8');
// var certificate = fs.readFileSync(path.join(__dirname, '../keys/wfxytop.crt'), 'utf8');
// var credentials = { key: privateKey, cert: certificate };
//  var httpServer = http.createServer(app);
// // var httpsServer = https.createServer(credentials, app);
//  httpServer.listen(port);
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port);
//# sourceMappingURL=index.js.map