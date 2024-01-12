//路由配置 后台管理系统
//后台系统公司内部访问,chrome  history 依靠html5的.pushState()
//用户端 移动项目没这个问题,  PC端,政府 企业 要考虑兼容性
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; //直接引入
import { usePermissStore } from "../store/permiss.js";

// 设置数组
// admin [1,2,3]
// user [1]
// useRoute meta.permiss 你要访问的页面的权限  includes true
const routes = [
  {
    path: "/",
    redirect: "/dashboard", //重定向 30x
  },
  {
    path: "/",
    name: "Home",
    component: Home, //layout
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
          title: "系统首页首页", //路由守卫的时候设置
          permiss: "1", //哪些页面可以看
        },
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/table",
        name: "basetable",
        meta: {
          title: "表格", //路由守卫的时候设置
          permiss: "2", //哪些页面可以看
        },
        // 动态挂载路由 异步
        component: () => import("../views/Table.vue"),
      },
    ],
  },
  {
    path: "/403",
    name: "403",
    component: () => import("../views/403.vue"),
    meta: {
      title: "没有权限", //路由守卫的时候设置
      permiss: "1", //哪些页面可以看
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}| 后台管理系统`;
  const data = usePermissStore();
  //登录后的用户名
  // const role = localStorage.getItem("role");
  const role = "admin";
  //没有登录
  if (!role && to.path !== "/login") {
    next("/login");
  } else if (
    to.meta.permiss &&
    !data.roleList[role].includes(to.meta.permiss)
  ) {
    next("/403");
  } else {
    next();
  }
});
export default router;
