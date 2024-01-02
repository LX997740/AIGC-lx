// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  const n = Number(ctx.cookies.get("view") || 0) + 1;
  ctx.cookies.set("view", n);
  ctx.body = `您第${n}次访问本站`;
};

app.use(main);

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
