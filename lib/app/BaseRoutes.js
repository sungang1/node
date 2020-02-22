"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const InitRoutes_1 = require("./Init/InitRoutes");
const classRoutes_1 = require("./class/classRoutes");
const zhihuRoutes_1 = require("./zhihu/zhihuRoutes");
var app = express.Router();
exports.BaseRoutes = app;
app.use('/my', new InitRoutes_1.InitRoutes().routes);
app.use('/class', new classRoutes_1.classRoutes().routes);
app.use('/zhihu', new zhihuRoutes_1.zhihuRoutes().routes);
//# sourceMappingURL=BaseRoutes.js.map