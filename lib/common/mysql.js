"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.pool = void 0;
const mysql = require("mysql");
let pool = mysql.createPool({
    host: "cdb-5g0grdk8.bj.tencentcdb.com",
    port: 10176,
    password: "wodeshengri0124$",
    database: "mydata",
    user: "root"
});
exports.pool = pool;
let query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        }
        else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接     
                conn.release();
                //事件驱动回调     
                callback(qerr, vals, fields);
            });
        }
    });
};
exports.query = query;
//# sourceMappingURL=mysql.js.map