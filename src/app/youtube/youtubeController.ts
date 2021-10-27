import * as express from 'Express';
import { query } from '../../common/mysql';
import { exec } from 'child_process';
 

export class youtube {
  
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


   // 获取视频信息
   getVideoInform = (req: express.Request, res: express.Response) => {
      
    let url = req.query.url;
    let  cmd = "youtube-dl -F " +url;
    let jsonArr = [];
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            res.json({data:"",error:error});
            return;
        }
        console.log(`stdout: ${stdout}`);
        var arr = stdout.split("\n")
        for (let i = 3; i < arr.length; i++) {
    
            let arr2 = arr[i].split(/\s{5,}/);
            if (arr2.length > 2) {
                let sizeArr = arr2[2].split(",");
                let size = sizeArr[sizeArr.length - 1];
                let newObj = {
                    downId: arr2[0],
                    format: arr2[1],
                    note: arr2[2],
                    size: size
                }
                jsonArr.push(newObj)
            }
    
        }
    
        res.json({data:jsonArr,error:"",url:url});
       });
 

   }

   downloadYoutube=(req: express.Request, res: express.Response) => {
      let url = req.body.url;

      


   }




}