"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var router = express.Router();
const classController_1 = require("./classController");
class classRoutes {
    constructor() {
        this._Controller = new classController_1.classController();
    }
    get routes() {
        var controller = this._Controller;
        router.post('/getclass', controller.getClass);
        router.post('/setclass', controller.setClass);
        router.post('/add', controller.add);
        router.post('/modify', controller.modify);
        router.post('/delete', controller.Delete);
        router.get('/app', controller.App); // 用于测试app请求参数
        return router;
    }
}
exports.classRoutes = classRoutes;
//# sourceMappingURL=classRoutes.js.map