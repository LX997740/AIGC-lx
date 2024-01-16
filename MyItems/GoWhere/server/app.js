const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser"); //让koa能解析post请求
const cors = require("koa2-cors"); //解决跨域

const user = require("./routers/user.js");
// const noteList = require("./routers/nodeList.js");

//主要逻辑
// const main = (ctx) => {

// };
app.use(bodyParser());
app.use(cors()); //告诉浏览器可以跨域

app
  .use(user.routes())
  .use(user.allowedMethods());

app.listen(3000, () => {
  console.log("服务器启动成功,3000端口");
});
