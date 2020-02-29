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
  
          router.get('/test', controller.test);    // 遍历uesers表，获得部门
        // router.post('/save', controller.Save); 
        // router.get('/output', controller.Output);
     router.post('/list_add_db_table',controller.list_add_db_table); //添加数据库表

     router.post('/list_del_db_table',controller.list_del_db_table); // 删除数据库表

     router.post('/list_update_db_table',controller.list_update_db_table); // 更改数据库表

     router.get('/list_find_db_table',controller.list_find_db_table);// 发现数据库表

     router.get('/list_db',controller.list_db); // 所有数据列表
    
     router.post('/db',controller.db); // 获取具体数据

     router.get('/db_count',controller.db_count)
 
     router.post('/mark_position',controller.mark_position);// 标记阅读位置

     router.get('/get_mark_id',controller.get_mark_id); // 获取标记位置

     router.get('/get_mark_id_content',controller.get_mark_id_content); // 获取单条数据内容

     router.post('/skip_mark_id',controller.skip_mark_id); // 跳转到标记的数据
        return router;
    }
}