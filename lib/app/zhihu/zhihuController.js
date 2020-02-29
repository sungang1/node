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
        /**
         *   添加数据库表
         *
         *   post
         *
         *
         *
         */
        this.list_add_db_table = (req, res) => {
            let name = req.body.name == "" ? "null" : req.body.name;
            let url = req.body.url == "" ? "null" : req.body.url;
            let record_time = this.DateFormat(req.body.record_time);
            let py_time = this.DateFormat(req.body.py_time);
            let item_num = req.body.item_num == "" ? 0 : req.body.item_num;
            let data_table_name = req.body.data_table_name == "" ? "null" : req.body.data_table_name;
            let comment = req.body.comment == req.body.comment ? "null" : req.body.comment;
            let sql = `insert into zhihu_table_list(name,url,record_time,py_time,item_num,data_table_name,comment) values('${name}','${url}','${record_time}','${py_time}','${item_num}','${data_table_name}','${comment}');`;
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
            let type = req.body.type;
            let sqlStr;
            if (type == 'id') {
                sqlStr = `delete from zhihu_table_list where id=${Number(req.body.id)}`;
            }
            else if (type == 'dbName') {
                sqlStr = `delete from zhihu_table_list where data_table_name=${req.body.dbName}`;
            }
            mysql_1.query(sqlStr, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "" });
                }
            });
        };
        // 所有数据库列表
        this.list_db = (req, res) => {
            let limit = req.query.limit;
            let offset = req.query.offset;
            let sql = `select * from zhihu_table_list where id>${offset} limit ${limit} `;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        // 修改表
        this.list_update_db_table = (req, res) => {
            let id = req.body.id;
            let name = req.body.name;
            let url = req.body.url;
            let record_time = this.DateFormat(req.body.record_time);
            let py_time = this.DateFormat(req.body.py_time);
            let item_num = req.body.item_num;
            let data_table_name = req.body.data_table_name;
            let comment = req.body.comment;
            let sql = `update zhihu_table_list set name='${name}', url='${url}',record_time='${record_time}',py_time='${py_time}',item_num='${item_num}',data_table_name='${data_table_name}',comment='${comment}' where id=${id};`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        // 发现表
        this.list_find_db_table = (req, res) => {
            let id = req.query.id;
            let sql = `select * from zhihu_table_list where id=${id}`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        // 查找详细的数据表
        this.db = (req, res) => {
            let limit = req.body.limit;
            let offset = req.body.offset;
            let type = req.body.type;
            let dbName = req.body.dbName;
            let range = req.body.range;
            let rangeStr = ""; // 查找范围sql字符串
            let order = ""; // 排序sql字符串
            switch (type) {
                case "default":
                    order = "";
                    break;
                case "ascendup":
                    order = "ORDER BY up_num ASC";
                    break;
                case "ascendcomment":
                    order = "ORDER BY comment_num ASC";
                    break;
                case "descendup":
                    order = "ORDER BY up_num DESC";
                    break;
                case "descendcomment":
                    order = "ORDER BY comment_num DESC";
                    break;
                default:
                    order = "";
                    break;
            }
            switch (range) {
                case "0":
                    break;
                case "1":
                    rangeStr = ` and up_num>${Number(req.body.gtup)}`;
                    break;
                case "2":
                    rangeStr = ` and comment_num>${Number(req.body.gtcomment)}`;
                    break;
                case "3":
                    rangeStr = ` and up_num<${Number(req.body.lwup)}`;
                    break;
                case "4":
                    rangeStr = ` and comment_num<${Number(req.body.lwcomment)}`;
                    break;
                case "5":
                    rangeStr = ` and up_num>${Number(req.body.gtup)} and comment_num>${Number(req.body.gtcomment)}`;
                    break;
                case "6":
                    rangeStr = ` and up_num>${Number(req.body.gtup)} and comment_num<${Number(req.body.lwcomment)}`;
                    break;
                case "7":
                    rangeStr = ` and up_num<${Number(req.body.lwup)} and comment_num>${Number(req.body.gtcomment)}`;
                    break;
                case "8":
                    rangeStr = ` and up_num<${Number(req.body.lwup)} and comment_num<${Number(req.body.lwcomment)}`;
                    break;
                case "9":
                    rangeStr = ` and up_num>${Number(req.body.gtup)} and up_num<${Number(req.body.lwup)} `;
                    break;
                case "10":
                    rangeStr = ` and comment_num>${Number(req.body.gtcomment)} and comment_num<${Number(req.body.lwcomment)}`;
                    break;
                default:
                    rangeStr = "";
                    break;
            }
            let sqlStr = `select * from ${dbName} where id>${offset}  ${rangeStr}   ${order} limit ${limit} `;
            mysql_1.query(sqlStr, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        this.db_count = (req, res) => {
            let dbName = req.query.dbName;
            let sql = `select count(*) as count from ${dbName} `;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        // 标记阅读位置
        this.mark_position = (req, res) => {
            let dbName = req.body.dbName;
            let last_read = req.body.last_read;
            let sql = `update zhihu_table_list set last_read=${last_read} where data_table_name='${dbName}';`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        // 获取标记位置
        this.get_mark_id = (req, res) => {
            let dbName = req.query.dbName;
            let sql = `select last_read from zhihu_table_list where data_table_name='${dbName}'; `;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        this.get_mark_id_content = (req, res) => {
            let dbName = req.query.dbName;
            let id = req.query.id;
            let sql = `select * from ${dbName} where id=${id};`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        this.skip_mark_id = (req, res) => {
            let id = req.body.id;
            let dbName = req.body.dbName;
            let limit = req.body.limit;
            let sql = `select * from ${dbName} where id>=${id} limit ${limit};`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
        this.test = (req, res) => {
            let sqlStr = "SELECT  COUNT(*) from zhihu_two;";
            let sqlStr2 = "SELECT * FROM zhihu_ten where id>3 and up_num >40000 and comment_num >1000 ORDER BY up_num DESC LIMIT 10;";
            mysql_1.query(sqlStr, function (err, val, fied) {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ "error": "", "data": val });
                }
            });
        };
    }
}
exports.zhihu = zhihu;
//# sourceMappingURL=zhihuController.js.map