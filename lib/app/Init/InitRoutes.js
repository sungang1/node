"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var router = express.Router();
const InitController_1 = require("./InitController");
class InitRoutes {
    constructor() {
        this._Controller = new InitController_1.Init();
    }
    get routes() {
        var controller = this._Controller;
        router.get('/test', controller.test); // 遍历uesers表，获得部门
        router.post('/save', controller.Save);
        router.get('/output', controller.Output);
        return router;
    }
}
exports.InitRoutes = InitRoutes;
//# sourceMappingURL=InitRoutes.js.map