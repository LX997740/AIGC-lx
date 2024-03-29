import { createRouter, createWebHistory } from "vue-router";
import axios from "../api";

//root的子路由
const rootRoutes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomePage/HomePage.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/strategy",
    name: "strategy",
    component: () => import("../views/strategy/Strategy.vue"),
    meta: {
      title: "攻略群",
    },
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("../views/ShoppingPage/ShoppingPage.vue"),
    meta: {
      title: "商城",
    },
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountPage/AccountPage.vue"),
    meta: {
      title: "个人中心",
    },
  },
];

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/TheRoot.vue"),
    children: rootRoutes,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/TheLogin.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/TheRegister.vue"),
    meta: {
      title: "注册",
    },
  },
  {
    path:"/strategySearch",
    name:"strategySearch",
    component:()=>import("@/views/strategy/StrategySearch.vue"),
    meta:{
      title:"搜索"
    }
  },
  {
    path:"/strategyDetail",
    name:"strategyDetail",
    component:()=>import("@/views/strategy/StrategyDetail.vue"),
    meta:{
      title:"详情"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//路由守卫
//设置白名单
const whiteList = [
  "/login",
  "/register",
  "/home",
  "/shopping",
  "/strategy",
  "/home",
];

router.beforeEach(async (to, from, next) => {
  //设置标题
  document.title = to.meta.title;
  //判断是否在白名单
  if (!whiteList.includes(to.path)) {
    // 把token传到后端
    try {
      const res = await axios.get("/protectRoute");
      if (res.data) {
        next();
      }
    } catch (e) {
      //判断是否登录
      router.push("/login");
      return;
    }
  } else {
    //如果在白名单中
    next();
  }
});

export default router;
