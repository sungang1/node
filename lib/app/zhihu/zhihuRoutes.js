"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var router = express.Router();
const zhihuController_1 = require("./zhihuController");
class zhihuRoutes {
    constructor() {
        this._Controller = new zhihuController_1.zhihu();
    }
    get routes() {
        var controller = this._Controller;
        // router.get('/test', controller.test);    // 遍历uesers表，获得部门
        // router.post('/save', controller.Save); 
        // router.get('/output', controller.Output);
        router.post('/list_add_db_table', controller.list_add_db_table);
        router.get('/list_db', controller.list_db);
        return router;
    }
}
exports.zhihuRoutes = zhihuRoutes;
//# sourceMappingURL=zhihuRoutes.js.map