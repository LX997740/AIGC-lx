import { createRouter, createWebHistory } from "vue-router";
import axios from "../api";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/noteclass",
    name: "noteClass",
    component: () => import("../views/noteClass.vue"),
    meta: {
      title: "笔记分类",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "注册",
    },
  },
  {
    path: "/noteList",
    name: "noteList",
    component: () => import("../views/NoteList.vue"),
    meta: {
      title: "笔记列表",
    },
  },
  {
    path: "/noteDetail",
    name: "noteDetail",
    component: () => import("../views/NoteDetail.vue"),
    meta: {
      title: "笔记详情",
    },
  },
  {
    path: "/notePublish",
    name: "notePublish",
    component: () => import("../views/NotePublish.vue"),
    meta: {
      title: "笔记发布",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
//路由守卫
//设置白名单
const whiteList = ["/login", "/register"];
router.beforeEach(async (to, from, next) => {
  //设置标题
  document.title = to.meta.title;
  //判断是否在白名单
  if (!whiteList.includes(to.path)) {
    // 把token传到后端
    try {
      const res = await axios.get("/protectRoute");
    } catch (e) {
      //判断是否登录
      router.push("/login");
      return;
    }
  }
  next();
});
export default router;
