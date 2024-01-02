// 1. 引入koa模块
const Koa = require("koa");
const Router = require("@koa/router");
const router = new Router();
const app = new Koa();

const main = (ctx) => {
  ctx.body = "首页";
};
const about = (ctx) => {
  ctx.body = "about page";
};

router.get("/main", main);
router.get("/about", about);

app.use(router.routes()); //所有配置的路由都生效
app.use(router.allowedMethods()); //所有的方法都生效

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
