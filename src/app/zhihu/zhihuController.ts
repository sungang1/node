import * as express from 'Express';
import { query } from '../../common/mysql';

export class zhihu {
/**
 *  知乎各个问题进行数据库列表更新、删除、添加、查找
 * 
 */

 DateFormat=(dates)=> {
   let date=new Date(dates);
   return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 }
   // 添加表
   list_add_db_table=(req: express.Request, res: express.Response)=>{
   
      let name=req.body.name==""?"null":req.body.name;
      let url=req.body.url==""?"null":req.body.url;
      let record_time= this.DateFormat(req.body.record_time) ;
      let py_time= this.DateFormat(req.body.py_time) ;
      let item_num=req.body.item_num==""?0:req.body.item_num;
      let data_table_name=req.body.data_table_name==""?"null":req.body.data_table_name;
      let comment=req.body.comment==req.body.comment?"null":req.body.comment;
      let sql = `insert into zhihu_table_list(name,url,record_time,py_time,item_num,data_table_name,comment) values('${name}','${url}','${record_time}','${py_time}','${item_num}','${data_table_name}','${comment}');`;
      
      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         }else{
            res.json({"error":""})
         }
      })
   }

// 删除表
   list_del_db_table=(req: express.Request, res: express.Response)=>{
     let type=req.body.type;
     let sqlStr;
     if(type=='id'){
      sqlStr=`delete from zhihu_table_list where id=${Number(req.body.id)}`
     }else if(type=='dbName') {
       sqlStr=`delete from zhihu_table_list where data_table_name=${req.body.dbName}`
     }
     query(sqlStr, function (err, val, fied) {
      if (err) {
         res.json({ error: err })
      }else{
         res.json({"error":""})
      }
   })


   }
  


// 所有数据库列表


   list_db=(req: express.Request, res: express.Response)=>{
     let limit=req.query.limit;
     let offset=req.query.offset;
  

      let sql=`select * from zhihu_table_list where id>${offset} limit ${limit} `;
      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         }else{
            res.json({"error":"","data":val})
         }
      })
   }
   




// 修改表
   list_update_db_table=(req: express.Request, res: express.Response)=>{



   }
  

// 发现表
   list_find_db_table=(req: express.Request, res: express.Response)=>{
      let id= req.query.id;
      let sql=`select * from zhihu_table_list where id=${id}`;
      query(sql, function (err, val, fied) {
         if (err) {
            res.json({ error: err })
         }else{
            res.json({"error":"","data":val})
         }
      })

   }


   // 查找详细的数据表
   db=(req: express.Request, res: express.Response)=>{
      let limit=req.query.limit;
      let offset=req.query.offset;
      let type=req.query.type;
      let dbName=req.query.dbName;
      if(type=='default'){
         let sql=`select * from  ${dbName} where id>${offset} limit ${limit} `;
         query(sql, function (err, val, fied) {
            if (err) {
               res.json({ error: err })
            }else{
               res.json({"error":"","data":val})
            }
         })
  
      }
     

   }



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