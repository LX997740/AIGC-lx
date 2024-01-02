// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  //   throw 500;
  ctx.response.status = 404;
  ctx.body = {
    code: 404,
    msg: "页面不存在",
  };
};

app.use(main);

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
