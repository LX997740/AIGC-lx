// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  //只要被app use掉的函数一定具有ctx参数 ctx == koa
  if (ctx.url.startsWith("/")) {
    ctx.response.type = "json";
    ctx.body = "<h2>hello world</h2>";
  } else if (ctx.url === "/user") {
    ctx.body = {
      name: "zhangsan",
      age: 18,
    };
  } else {
    ctx.body = "404";
  }
};

app.use(main);
app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
