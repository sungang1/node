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
var app = express();
var port = process.env.PORT || 8088; // 444
var cookieParser = require('cookie-parser');
app.set("port", port);
// app.use(MiddlewaresBase.configuration);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', ejs.__express);
// app.set('view engine', 'html');
// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(compression());
app.use(cookieParser());
// var root = path.join(__dirname, '../../client/dist');
// console.log(root);
// app.use(express.static(root));
// console.log(path.join(__dirname, '../../uploadfiles'));
// app.use(express.static(path.join(__dirname, '../../uploadfiles')));
// app.use('/html', express.static(path.join(__dirname, '../../html')));
// app.use(express.static(path.join(__dirname, 'views/Hello')));
app.set('views', path.join(__dirname, 'views/Hello'));
// console.log( path.join(__dirname, 'views/Hello'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(logger('dev'));
// 限制文件大小
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('sessionuse'));
//这是判断是选择终端的
app.use(express.static(path.join(__dirname, 'views/Hello')));
// console.log('w',path.join(__dirname, 'views/Hello'));
//生产环境中去掉
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
// app.listen(port, () => {
//     console.log("Node app is running at localhost:" + port);
//     // console.log(process.cwd());
// });
// var privateKey = fs.readFileSync('e:\\MyWork\\mOAts\\mOAts\\server\\keys\\private.pem', 'utf8');
// var certificate = fs.readFileSync('e:\\MyWork\\mOAts\\mOAts\\server\\keys\\file.crt', 'utf8');
// 下面是ssl配置
// var privateKey = fs.readFileSync(path.join(__dirname, '../keys/wfxytop.key'), 'utf8');
// var certificate = fs.readFileSync(path.join(__dirname, '../keys/wfxytop.crt'), 'utf8');
// var credentials = { key: privateKey, cert: certificate };
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
httpServer.listen(port);
// httpsServer.listen(port);
console.log("Node app is running at localhost:" + port);
// var job = new MyJob();
// job.do();
// var zwC = new ZwController();
// zwC.DoUpdate();
// var artc=new ArticleController();
// artc.test();
//# sourceMappingURL=index.js.map