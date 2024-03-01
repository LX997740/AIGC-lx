const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new Koa();

function rewriteImport(content) {
  return content.replace(
    // 匹配 import 语句
    //[] 只匹配一个 , | 取某一个 , [^], ()分组,g全文匹配
    / from ['|"]([^'"]+)['|"]+/g,

    function (s0, s1) {
      // 替换为正确的路径
      if (s1[0] !== "." && s1[1] !== "/") {
        return ` from '/@modules/${s1}'`;
      } else {
        return s0;
      }
    }
  );
}

// /后端路由
// 中间件 middleware 洋葱模型
app.use(async (ctx) => {
  // 如果是 /
  // ctx 请求上下文 : 请求对象，响应对象
  const {
    request: { url, query },
  } = ctx;
  if (url === "/") {
    //设置响应头
    ctx.type = "text/html";
    let content = fs.readFileSync("./index.html", "utf-8");
    ctx.body = content;
  } else if (url.endsWith(".js")) {
    //resolve 有效的物理路径
    // console.log(url);
    const p = path.resolve(__dirname, url.slice(1));
    ctx.type = "application/javascript";
    const content = fs.readFileSync(p, "utf-8");
    ctx.body = rewriteImport(content);
  }
});

app.listen(5173, () => {
  console.log("5173");
});
