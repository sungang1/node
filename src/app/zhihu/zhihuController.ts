import * as express from 'Express';
import { query } from '../../common/mysql';

export class zhihu {
   /**
    *  知乎各个问题进行数据库列表更新、删除、添加、查找
    * 
    */

   DateFormat = (dates) => {
      let date = new Date(dates);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   }
   // 添加表
   list_add_db_table = (req: express.Request, res: express.Response) => {

      let name = req.body.name == "" ? "null" : req.body.name;
      let url = req.body.url == "" ? "null" : req.body.url;
      let record_time = this.DateFormat(req.body.record_time);
      let py_time = this.DateFormat(req.body.py_time);
      let item_num = req.body.item_num == "" ? 0 : req.body.item_num;
      let data_table_name = req.body.data_table_name == "" ? "null" : req.body.data_table_name;
      let comment = req.body.comment == req.body.comment ? "null" : req.body.comment;
      let sql = `insert into zhihu_table_list(name,url,record_time,py_time,item_num,data_table_name,comment) values('${name}','${url}','${record_time}','${py_time}','${item_num}','${data_table_name}','${comment}');`;


      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "" })
         }
      })
   }

   // 删除表
   list_del_db_table = (req: express.Request, res: express.Response) => {
      let type = req.body.type;
      let sqlStr;
      if (type == 'id') {
         sqlStr = `delete from zhihu_table_list where id=${Number(req.body.id)}`
      } else if (type == 'dbName') {
         sqlStr = `delete from zhihu_table_list where data_table_name=${req.body.dbName}`
      }
      query(sqlStr, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "" })
         }
      })


   }



   // 所有数据库列表


   list_db = (req: express.Request, res: express.Response) => {
      let limit = req.query.limit;
      let offset = req.query.offset;


      let sql = `select * from zhihu_table_list where id>${offset} limit ${limit} `;
      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "", "data": val })
         }
      })
   }





   // 修改表
   list_update_db_table = (req: express.Request, res: express.Response) => {



   }


   // 发现表
   list_find_db_table = (req: express.Request, res: express.Response) => {
      let id = req.query.id;
      let sql = `select * from zhihu_table_list where id=${id}`;
      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "", "data": val })
         }
      })

   }


   // 查找详细的数据表
   db = (req: express.Request, res: express.Response) => {
      let limit = req.body.limit;
      let offset = req.body.offset;
      let type = req.body.type;
      let dbName = req.body.dbName;
      let range = req.body.range;
      let rangeStr = "";   // 查找范围sql字符串
      let order = "";        // 排序sql字符串

      switch (type) {
         case "default":
            order = "";
            break;
         case "ascendup":
            order = "ORDER BY up_num ASC"
            break;
         case "ascendcomment":
            order = "ORDER BY comment_num ASC"
            break;

         case "descendup":
            order = "ORDER BY up_num DESC"
            break;

         case "descendcomment":
            order = "ORDER BY comment_num DESC"
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


      let sqlStr = `select * from ${dbName} where id>${offset}  ${rangeStr}   ${order} limit ${limit} `
      query(sqlStr, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "", "data": val })
         }
      })
   }


   db_count = (req: express.Request, res: express.Response) => {

       let dbName=  req.query.dbName;
       let sql=`select count(*) from ${dbName}`;

       query(sql , function (err, val, fied) {
         if (err) {
            res.json({ error: err }) 
         } else {
            res.json({ "error": "", "data": val })
         }
      })
   }







   test = (req: express.Request, res: express.Response) => {


      let sqlStr = "SELECT  COUNT(*) from zhihu_two;"
      let sqlStr2 = "SELECT * FROM zhihu_ten where id>3 and up_num >40000 and comment_num >1000 ORDER BY up_num DESC LIMIT 10;"

      query(sqlStr, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         } else {
            res.json({ "error": "", "data": val })
         }
      })
   }








}