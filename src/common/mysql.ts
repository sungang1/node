import * as mysql from 'mysql';

let pool = mysql.createPool({
    host: "cdb-5g0grdk8.bj.tencentcdb.com",
    port: 10176,
    password: "wodeshengri0124$",
    database: "mydata",
    user: "root"
})

let query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接     
                conn.release();
                //事件驱动回调     
                callback(qerr, vals, fields);
            });
        }
    });
};
export { pool, query }