const Router = require("@koa/router");
const router = new Router();
const { userLogin,userRegister,vaildUser } = require("../controllers/mysqlControl.js");

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
        token: "123456",
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
  //如果不存在就往数据库植入一条新的数据
  const { username, password, nickname } = ctx.request.body;
  try{
    const result = await vaildUser(username);
    if(result.length){
      //如果查询到数据，说明账号存在
      ctx.body = {
        code: "8001",
        data: "error",
        msg: "账号已存在",
      };
    }else {
      const result = await userRegister(username, password, nickname);
      console.log(result);
    }
  }catch(err){
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

module.exports = router;
