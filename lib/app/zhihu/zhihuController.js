"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../common/mysql");
class zhihu {
    constructor() {
        /**
         *  知乎各个问题进行数据库列表更新、删除、添加、查找
         *
         */
        this.DateFormat = (dates) => {
            let date = new Date(dates);
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        };
        // 添加表
        this.list_add_db_table = (req, res) => {
            let name = req.body.name;
            let url = req.body.url;
            let record_time = this.DateFormat(req.body.record_time);
            let py_time = this.DateFormat(req.body.py_time);
            let item_num = req.body.item_num;
            let data_table_name = req.body.data_table_name;
            let comment = req.body.comment;
            let sql = `insert into zhihu_table_list(name,url,record_time,py_time,item_num,data_table_name,comment) values('${name}','${url}','${record_time}','${py_time}','${item_num}','${data_table_name}','${comment}');`;
            console.log(req.body);
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "" });
                }
            });
        };
        // 删除表
        this.list_del_db_table = (req, res) => {
        };
        // 修改表
        this.list_update_db_table = (req, res) => {
        };
        // 发现表
        this.list_find_db_table = (req, res) => {
        };
        // test = (req: express.Request, res: express.Response) => {
        //    console.log('测试成功');
        //    res.json({ "error": true })
        // }
        // Save = (req: express.Request, res: express.Response) => {
        //    let obj = req.body.content;
        //    console.log(obj);
        //    let sql = ` insert into content(KeyId,finshTime,modifyTime,content, tag) values('A00B00C00T0000',null,null,'${obj}',null);`;
        //    query(sql, function (err, val, fied) {
        //       if (err) {
        //          console.log(err);
        //       } else {
        //          console.log(val);
        //          res.json({ error: '' })
        //       }
        //    })
        // }
        // Output = (req: express.Request, res: express.Response) => {
        //    let sql = `select content from content where KeyId='A00B00C00T0000' `;
        //    query(sql, function (err, val, fied) {
        //       if (err) {
        //          console.log(err);
        //       } else {
        //          console.log(val);
        //          res.json({ error: '', data: val[1].content })
        //       }
        //    })
        // }
    }
}
exports.zhihu = zhihu;
//# sourceMappingURL=zhihuController.js.map