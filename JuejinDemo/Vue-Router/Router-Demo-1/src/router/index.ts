//用ES6解构导入
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
//可以直接导入组件
import HomeView from "../views/HomeView.vue";
// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Root",
    component: () => import("../views/TheRoot.vue"),
    //定义子路由
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        //也可以通过懒加载的方式
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  //使用history模式
  //路由的3种模式会在以后的文章中详细讲解
  history: createWebHistory(),
  routes,
});

export default router;
