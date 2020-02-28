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
        router.get('/test', controller.test); // 遍历uesers表，获得部门
        // router.post('/save', controller.Save); 
        // router.get('/output', controller.Output);
        router.post('/list_add_db_table', controller.list_add_db_table); //添加数据库表
        router.post('/list_del_db_table', controller.list_del_db_table); // 删除数据库表
        router.get('/list_find_db_table', controller.list_find_db_table); // 发现数据库表
        router.get('/list_db', controller.list_db); // 所有数据列表
        router.get('/db', controller.db); // 获取具体数据
        return router;
    }
}
exports.zhihuRoutes = zhihuRoutes;
//# sourceMappingURL=zhihuRoutes.js.map