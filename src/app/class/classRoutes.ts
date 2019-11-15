import express = require("express");
var router = express.Router();
import { classController } from './classController';
 
export class   classRoutes {
    private _Controller:  classController;
  
    constructor() {
        this._Controller = new  classController();
        
    }

    get routes() {
        var controller = this._Controller;
  
        router.post('/getclass', controller.getClass);     
        router.post('/setclass', controller.setClass); 
        router.post('/add', controller.add); 
        router.post('/modify',controller.modify);
        router.post('/delete',controller.Delete);


        router.get('/app',controller.App); // 用于测试app请求参数
        return router;
    }
}