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
const userLogin = (username, password) => {
  let _sql = `select * from users where username='${username}' and password='${password}';`;
  return allService.query(_sql);
};
//注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?,nickname=?;`;
  return allService.query(_sql, values);
};
//验证用户名是否存在
const vaildUser = (username) => {
  let _sql = `select * from users where username='${username}';`;
  return allService.query(_sql);
};

//根据类型查找比较列表
const findNoteListByType = (note_type) => {
  let _sql = `select * from note where note_type="${note_type}";`;
  return allService.query(_sql);
};
//根据ID查找note
const findNoteById = (id) => {
  let _sql = `select * from note where id="${id}";`;
  return allService.query(_sql);
};

//发布笔记
const notePublish = (values) => {
  // [userId, nickname, title, note_content, note_type, head_img, c_time, m_time];
  let _sql = `insert into note set userId=?,nickname=?,title=?,note_content=?,note_type=?,head_img=?,c_time=?,m_time=?;`;
  return allService.query(_sql, values);
};

module.exports = {
  userLogin,
  userRegister,
  vaildUser,
  findNoteListByType,
  findNoteById,
  notePublish,
};
