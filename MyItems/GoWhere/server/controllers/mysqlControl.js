//和数据库连接的相关操作
var mysql = require("mysql2");
var config = require("../config");

//创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
});
//连接MySQL
const allService = {
  query: function (sql, values) {
    //pool 连接
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          //执行SQL语句
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            //释放连接
            connection.release();
          });
        }
      });
    });
  },
};

//登录
const userLogin = (phone, password) => {
  let _sql = `select * from user where phone='${phone}' and password='${password}';`;
  return allService.query(_sql);
};
//注册
const userRegister = (values) => {
  let _sql = `insert into user set username=?,phone=?,password=?;`;
  return allService.query(_sql, values);
};
//验证用户名是否存在
const vaildUser = (phone) => {
  let _sql = `select * from user where phone='${phone}';`;
  return allService.query(_sql);
};

//获取推荐攻略群信息
const getStrategy = (page, pageSize) => {
  let start = (page - 1) * pageSize;
  let _sql = `select * from strategy limit ${start} , ${pageSize};`;
  return allService.query(_sql);
};

module.exports = {
  userLogin,
  userRegister,
  vaildUser,
  getStrategy,
};
