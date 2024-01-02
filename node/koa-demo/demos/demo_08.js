// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();
//错误的集中处理
const handle = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    // ctx.body = "error";
    console.log("----------------------", err);
    ctx.response.type = "html";
    ctx.body = '<p>页面找不到了</p>'
  }
};
const main = (ctx) => {
  ctx.throw(404);
};

app.use(handle);
app.use(main);

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
