import express = require("express");
var router = express.Router();
import { zhihu } from './zhihuController';
 
export class  zhihuRoutes {
    private _Controller:  zhihu;
  
    constructor() {
        this._Controller = new  zhihu();  
    }

    get routes() {
        var controller = this._Controller;
  
        // router.get('/test', controller.test);    // 遍历uesers表，获得部门
        // router.post('/save', controller.Save); 
        // router.get('/output', controller.Output);
     router.post('/list_add_db_table',controller.list_add_db_table);



        return router;
    }
}