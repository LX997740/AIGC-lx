const Router = require("@koa/router");
const router = new Router();
const { formateDate } = require("../config/utils.js");

const {
  findNoteListByType,
  findNoteById,
  notePublish,
} = require("../controllers/mysqlControl.js");

//根据type获取笔记详情
router.post("/noteList", async (ctx) => {
  const { note_type } = ctx.request.body;
  try {
    const res = await findNoteListByType(note_type);
    ctx.body = {
      code: "8000",
      msg: "获取成功",
      data: res,
    };
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});
//根据ID获取笔记详情
router.post("/noteDetail", async (ctx) => {
  const { id } = ctx.request.body;
  try {
    const res = await findNoteById(id);
    if (res.length) {
      ctx.body = {
        code: "8000",
        msg: "获取成功",
        data: res,
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "查找失败",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});
//发布笔记
router.post("/publish", async (ctx) => {
  const { note_content, note_type, head_img, userId, nickname, title } =
    ctx.request.body;
  // console.log(ctx.request.body);
  const c_time = formateDate(new Date());
  const m_time = formateDate(new Date());
  try {
    const res = await notePublish([
      userId,
      nickname,
      title,
      note_content,
      note_type,
      head_img,
      c_time,
      m_time,
    ]);
    if (res.affectedRows != 0) {
      ctx.body = {
        code: "8000",
        msg: "发布成功",
        data: "success",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "发布失败",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

module.exports = router;
