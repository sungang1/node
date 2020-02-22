import * as express from 'Express';
import { query } from '../../common/mysql';

export class classController {
    getClass = (req: express.Request, res: express.Response) => {
        let type = req.body.type;
        let sql;

        switch (type) {
            case 'A':
                sql = `select distinct A_id,A_name from A_class`;
                break;
            case 'B':
                sql = `select distinct B_id,B_name from A_class where A_id='${req.body.refA}' and B_id!= ""`;
                break;
            case 'C':
                sql = `select distinct C_id,C_name from A_class where A_id='${req.body.refA}' and B_id='${req.body.refB}' and C_id!= ""`;
                break;
            case 'D':
                sql = `select  Title_id,title from A_class where A_id='${req.body.refA}' and B_id='${req.body.refB}' and C_id='${req.body.refC}' and Title_id!= ""`;
                break;
            default:
                break;
        }
        query(sql, (err, val, fied) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ error: '', data: val })
            }
        })

    }


    setClass = (req: express.Request, res: express.Response) => {
       
       console.log(req.body);

       
       
        // let obj = req.body.content;
        // console.log(obj);
        // let sql = ` insert into content(KeyId,finshTime,modifyTime,content, tag) values('A00B00C00T0000',null,null,'${obj}',null);`;
        // query(sql, function (err, val, fied) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(val);
        //         res.json({ error: '' })
        //     }
        // })
    }


    add = (req: express.Request, res: express.Response) => {
        let sql = '';
        switch (req.body.type) {
            case 'A':
                sql = `INSERT INTO  A_class( A_name, A_id, KeyId ) VALUES ( '${req.body.AName}', '${req.body.AId}','${req.body.AId}');`
                break;
            case 'B':
                sql = `INSERT INTO  A_class( A_name, A_id,B_name,B_id,KeyId ) VALUES ( '${req.body.AName}', '${req.body.AId}','${req.body.BName}', '${req.body.BId}','${req.body.AId}${req.body.BId}');`
                break;
            case 'C':
                sql = `INSERT INTO  A_class( A_name, A_id, B_name, B_id, C_name, C_id, KeyId ) VALUES 
                    ( '${req.body.AName}', '${req.body.AId}','${req.body.BName}', '${req.body.BId}','${req.body.CName}', '${req.body.CId}','${req.body.AId}${req.body.BId}${req.body.CId}');`
                break;
            case 'D':
                sql = `INSERT INTO  A_class( A_name, A_id, B_name, B_id, C_name, C_id, Title_id, title, KeyId ) VALUES 
                    ( '${req.body.AName}', '${req.body.AId}','${req.body.BName}', '${req.body.BId}',
                    '${req.body.CName}', '${req.body.CId}','${req.body.TId}','${req.body.TName}',  '${req.body.AId}${req.body.BId}${req.body.CId}${req.body.TId}');`
                break;
            default:
                break;
        }

        query(sql, (err, val, field) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ error: '' });
            }
        })

    }

    modify = (req: express.Request, res: express.Response) => {
        let sql = '';
        switch (req.body.type) {
            case 'A':
                sql = `UPDATE A_class set A_id='${req.body.nochageA}',A_name='${req.body.AName}' where KeyId like '%${req.body.AId}%'`;
                break;
            case 'B':
                sql = `UPDATE A_class set B_id='${req.body.BId}',B_name='${req.body.BName}' where  KeyId like '%${req.body.AId}${req.body.BId}%'`;
                break;
            case 'C':
                sql = `UPDATE A_class set C_id='${req.body.CId}',C_name='${req.body.CName}' where  KeyId like '%${req.body.AId}${req.body.BId}${req.body.CId}%'`;
                break;
            case 'D':
                sql = `UPDATE A_class set Title_id='${req.body.TId}',title='${req.body.TName}' where   KeyId like '%${req.body.AId}${req.body.BId}${req.body.CId}${req.body.TId}%'`;
                break;
            default:
                break;
        }
        query(sql, (err, val, field) => {
            if (err) {
                res.json({ error: err });
            } else {
                console.log(val);
                console.log(sql);
                res.json({ error: '' });
            }
        })
    }

    Delete = (req: express.Request, res: express.Response) => {
        let sql = '';
        switch (req.body.type) {
            case 'A':
                sql = `DELETE FROM A_class WHERE A_id='${req.body.AId}';`;
                break;
            case 'B':
                sql = `DELETE FROM A_class WHERE B_id='${req.body.BId}';`;
                break;
            case 'C':
                sql = `DELETE FROM A_class WHERE C_id='${req.body.CId}';`;
                break;
            case 'D':
                sql = `DELETE FROM A_class WHERE Title_id='${req.body.TId}';`;
                break;
            default:
                break;
        }
        query(sql, (err, val, field) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ error: '' });
            }
        })
    }


    App = (req: express.Request, res: express.Response) => {
        res.json({ data: '这是我的测试文件' });
    }


}