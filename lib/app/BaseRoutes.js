"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoutes = void 0;
const express = require("express");
const youtubeRoutes_1 = require("./youtube/youtubeRoutes");
const zhihuRoutes_1 = require("./zhihu/zhihuRoutes");
var app = express.Router();
exports.BaseRoutes = app;
app.use('/zhihu', new zhihuRoutes_1.zhihuRoutes().routes);
app.use('/youtube', new youtubeRoutes_1.youtubeRoutes().routes);
//# sourceMappingURL=BaseRoutes.js.map