const jwt = require("jsonwebtoken");
const secretkey = "howdoyoudo"; //密钥

// 生成token
const sign = (data = {}) => {
  return jwt.sign(data, secretkey, {
    expiresIn: 60 * 60, //过期时间 1小时
  });
};

// 验证token
const verify = (token, secretkey, next) => {
  return jwt.verify(token, secretkey);
};

module.exports = {
  sign,
  verify,
};
