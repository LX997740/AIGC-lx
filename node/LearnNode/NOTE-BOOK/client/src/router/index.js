import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
//路由守卫
//设置白名单
const whiteList = ["/login", "/register"];
router.beforeEach((to, from, next) => {
  //设置标题
  document.title = to.meta.title;
  //判断是否在白名单
  if (!whiteList.includes(to.path)) {
    //判断是否登录
    if (!sessionStorage.getItem("userInfo")) {
      router.push("/login");
      return;
    }
    next();
    return;
  }
  next();
});
export default router;
