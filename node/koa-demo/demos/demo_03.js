// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();
const fs = require("fs");

const main = (ctx) => {
  if (ctx.url.startsWith("/user")) {
    const data = fs.readFileSync("./data.json", "utf8");
    ctx.body = data;
  } else if (ctx.url.startsWith("/home")) {
    // ctx.response.type = "application/json";
    const page = fs.readFileSync("./template.html", "utf8");
    ctx.body = page;
  }
};

app.use(main);
app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
