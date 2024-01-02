//后端启动一个一直运行服务,提供接口给前端请求
const http = require("http");

const server = http.createServer((req, res) => {
  //提供不同的接口地址
  if (req.url.startsWith("/home")) {
    res.end("你访问的是首页");
  } else if (req.url.startsWith("/detail")) {
    res.end("你访问的是详情");
  } else {
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("服务器3000启动成功");
});
