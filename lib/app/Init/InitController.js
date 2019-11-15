"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../common/mysql");
class Init {
    constructor() {
        this.test = (req, res) => {
            console.log('测试成功');
            res.json({ "error": true });
        };
        this.Save = (req, res) => {
            let obj = req.body.content;
            console.log(obj);
            let sql = ` insert into content(KeyId,finshTime,modifyTime,content, tag) values('A00B00C00T0000',null,null,'${obj}',null);`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(val);
                    res.json({ error: '' });
                }
            });
        };
        this.Output = (req, res) => {
            let sql = `select content from content where KeyId='A00B00C00T0000' `;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(val);
                    res.json({ error: '', data: val[1].content });
                }
            });
        };
    }
}
exports.Init = Init;
//# sourceMappingURL=InitController.js.map