import * as express from 'Express';
import { query } from '../../common/mysql';

export class Init {
   test = (req: express.Request, res: express.Response) => {
      console.log('测试成功');
      res.json({ "error": true })

   }


   Save = (req: express.Request, res: express.Response) => {
      let obj = req.body.content;
      console.log(obj);
      let sql = ` insert into content(KeyId,finshTime,modifyTime,content, tag) values('A00B00C00T0000',null,null,'${obj}',null);`;


      query(sql, function (err, val, fied) {
         if (err) {
            console.log(err);
         } else {
            console.log(val);
            res.json({ error: '' })
         }
      })
   }

   Output = (req: express.Request, res: express.Response) => {
      let sql = `select content from content where KeyId='A00B00C00T0000' `;
      query(sql, function (err, val, fied) {
         if (err) {
            console.log(err);
         } else {
            console.log(val);
            res.json({ error: '', data: val[1].content })
         }
      })
   }

 

}