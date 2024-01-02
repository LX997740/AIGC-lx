// 1. 引入koa模块
const Koa = require("koa");
const app = new Koa();

//洋葱模型
const Fa = (ctx, next) => {
  console.log("a");
  next();
  console.log(1);
};
const Fb = (ctx, next) => {
  console.log("b");
  next();
  console.log(2);
};
const Fc = (ctx,next) => {
  console.log("c");
  next();
  console.log(3);
};
app.use(Fb); //所有被use的函数都叫中间件函数,中间件的执行是有规律的
app.use(Fa);
app.use(Fc);

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
