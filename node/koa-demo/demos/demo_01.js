// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
