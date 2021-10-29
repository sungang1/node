import express = require("express");
var router = express.Router();
import {  youtube } from './youtubeController';
 
export class  youtubeRoutes {
    private _Controller:  youtube;
  
    constructor() {
        this._Controller = new  youtube();  
    }

    get routes() {
        var controller = this._Controller;
   
  
     
     router.get('/getVideoInform',controller.getVideoInform); // 获取单条数据内容
     
    router.post('/downloadYoutube',controller.downloadYoutube);

    router.post("/fileSize",controller.fileSize);
        return router;
    };

   


}