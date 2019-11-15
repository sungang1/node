import express = require("express");
var router = express.Router();
import { Init } from './InitController';
 
export class  InitRoutes {
    private _Controller:  Init;
  
    constructor() {
        this._Controller = new  Init();
        
    }

    get routes() {
        var controller = this._Controller;
  
        router.get('/test', controller.test);    // 遍历uesers表，获得部门
        router.post('/save', controller.Save); 
        router.get('/output', controller.Output);
     
        return router;
    }
}