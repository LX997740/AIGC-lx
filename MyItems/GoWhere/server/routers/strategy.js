const Router = require("@koa/router");
const router = new Router();

const { getStrategy } = require("../controllers/mysqlControl");
//定义用户接口

//获取所有攻略群
router.get("/strategy", async (ctx) => {
  const { page, pageSize } = ctx.query;
  console.log(page, pageSize);
  try {
    const res = await getStrategy(page, pageSize);
    if (res) {
      ctx.body = {
        code: "8000",
        msg: "获取成功",
        data: res,
      };
    } else {
      ctx.body = {
        code: "8004",
        msg: "获取失败",
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
