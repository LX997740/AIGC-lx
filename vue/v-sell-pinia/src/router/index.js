import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/goods",
  },
  {
    path: "/goods",
    name: "goods",
    component: () => import("@/views/goods/VsGoods.vue"),
  },

  {
    path: "/comment",
    name: "comment",
    component: () => import("@/views/comment/VsComment.vue"),
  },
  {
    path: "/seller",
    name: "seller",
    component: () => import("@/views/seller/VsSeller.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
