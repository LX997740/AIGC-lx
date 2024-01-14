const Router = require("@koa/router");
const router = new Router();
const jwt = require("../utils/JWT");
const secretkey = "howdoyoudo"; //密钥

const {
  userLogin,
  userRegister,
  vaildUser,
} = require("../controllers/mysqlControl.js");

//定义接口
// 登录接口
router.post("/login", async (ctx) => {
  //获取到前端传递的账号密码去数据库中校验账号密码的正确性
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    if (result.length) {
      //如果查询到数据，说明账号密码正确
      let data = {
        id: result[0].id,
        username: result[0].username,
        nickname: result[0].nickname,
      };
      ctx.body = {
        code: "8000",
        msg: "登录成功",
        data: data,
        token: jwt.sign({ _id: data.id }), // 生成token，并传入用户_id
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
//注册接口
router.post("/register", async (ctx) => {
  //拿到前端传递的username,password,nickname去数据库中校验username是否存在

  const { username, password, nickname } = ctx.request.body;
  //判断账号密码昵称是否为空
  if (!username || !password || !nickname) {
    ctx.body = {
      code: "8003",
      data: "error",
      msg: "账号密码或昵称不能为空",
    };
    return;
  }
  try {
    const result = await vaildUser(username);
    //如果查询到数据，说明账号存在
    if (result.length) {
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "账号已存在",
      };
    } else {
      //如果不存在就往数据库植入一条新的数据
      const valuse = [username, password, nickname];
      const result = await userRegister(valuse);
      if (result.affectedRows) {
        ctx.body = {
          code: "8000",
          data: "success",
          msg: "注册成功",
        };
      } else if (result.affectedRows === 0) {
        ctx.body = {
          code: "8006",
          data: "error",
          msg: "注册失败",
        };
      }
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
