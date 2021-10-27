"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtubeRoutes = void 0;
const express = require("express");
var router = express.Router();
const youtubeController_1 = require("./youtubeController");
class youtubeRoutes {
    constructor() {
        this._Controller = new youtubeController_1.youtube();
    }
    get routes() {
        var controller = this._Controller;
        router.get('/getVideoInform', controller.getVideoInform); // 获取单条数据内容
        return router;
    }
    ;
}
exports.youtubeRoutes = youtubeRoutes;
//# sourceMappingURL=youtubeRoutes.js.map