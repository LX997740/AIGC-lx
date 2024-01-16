const Router = require("@koa/router");
const router = new Router();
const jwt = require("../utils/JWT");
const secretkey = "howdoyoudo"; //密钥

const {
  userLogin,
  userRegister,
  vaildUser,
} = require("../controllers/mysqlControl");
//定义用户接口

//登录接口

router.post("/login", async (ctx) => {
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    //如果有result则说明账号密码正确
    if (result.length > 0) {
      let data = result[0];
      ctx.body = {
        code: "8000",
        msg: "登录成功",
        data: data,
        token: jwt.sign({ _id: data.id }), // 生成token，并传入用户id
      };
    } else {
      //如果查询不到数据，说明账号密码错误
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

//鉴权接口
router.get("/protectRoute", (ctx) => {
  // 获取前端传来的token
  const token = ctx.header.authorization?.replace("Bearer ", "");
  console.log(token);
  try {
    // 验证Token
    const decoded = jwt.verify(token, secretkey, { algorithms: ["HS256"] });
    console.log(decoded);
    // Token有效，返回受保护的资源
    ctx.body = {
      code: "8000",
      data: "success",
      msg: "Access",
    };
  } catch (error) {
    // Token无效或过期
    ctx.body = {
      code: "8005",
      data: error,
      msg: "token无效或过期请重新登录",
    };
  }
});

module.exports = router;
