import { defineStore } from "pinia";
import { ref } from "vue";

//推荐页仓库
export const useRecommendStore = defineStore("/home", () => {
  const getRecommendList = () => {
    return [
      {
        id: 1,
        title: "我的收藏",
        img: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg",
        name: "我的收藏",
        area: "我的收藏",
      },
      {
        id: 2,
        title: "购物车",
        img: "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_640.jpg",
        name: "购物车",
        area: "购物车",
      },
      {
        id: 3,
        title: "我的",
        img: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_640.jpg",
        name: "我的",
        area: "我的",
      },
      {
        id: 4,
        title: "首页",
        img: "https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_640.jpg",
        name: "首页",
        area: "首页",
      },
    ];
  };
  const Recommend = ref(getRecommendList());
  return {
    Recommend,
  };
});
//瀑布流仓库
export const useCartStore = defineStore("/Cart", () => {
  const getCartList = () => {
    return [
      {
        id: 1,
        title: "我的收藏",
        img: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg",
        name: "行走地区",
        area: "北海道",
        count: 99,
      },
      {
        id: 2,
        title: "我的收藏",
        img: "https://img95.699pic.com/photo/60010/9023.jpg_wh300.jpg",
        name: "行走地区",
        area: "南昌",
        count: 999,
      },
      {
        id: 3,
        title: "我的收藏",
        img: "https://p1-q.mafengwo.net/s8/M00/93/86/wKgBpVYoiOiABLExAAJI8ZtJQtI51.jpeg",
        name: "行走地区",
        area: "北京",
        count: 999,
      },
      {
        id: 4,
        title: "我的收藏",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzu2g5guCDgE_tgh5T8LCdOG7Ger6zMmlC7VUy6mNGIpDto7b00wh55esdpZtMCy5of4&usqp=CAU",
        name: "行走地区",
        area: "西安",
        count: 999,
      },
      {
        id: 5,
        title: "我的收藏",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkU_ad1yuV0E--ACv6mveizmncqh7aBXDIXcrxS3cog6eYkyUa4CFOTvp93-k4-04Dds&usqp=CAU",
        name: "行走地区",
        area: "东北",
        count: 999,
      },
      {
        id: 6,
        title: "我的收藏",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG13bsBxPLwZrGIZP-RDK2KuZm7q2nUmG5KNENNzL7lPrWcloft21i9fMM8mCxB7BruI&usqp=CAU",
        name: "行走地区",
        area: "北海道",
        count: 999,
      },
      {
        id: 7,
        title: "我的收藏",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gUJR-RODjYfjhlPHOpIgGLmq2hPnydN8Wcb5QuGzD2KT3g2F_K8M_I6A7ojqhEwfbAI&usqp=CAU",
        name: "行走地区",
        area: "北海道",
        count: 999,
      },
      {
        id: 8,
        title: "我的收藏",
        img: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg",
        name: "行走地区",
        area: "北海道",
        count: 999,
      },
    ];
  };
  const Carts = ref(getCartList());
  return {
    Carts,
  };
});
//grid仓库
export const useGridStore = defineStore("/grid", () => {
  const getGridList = () => {
    return [
      {
        icon: "cart-o",
        text: "自驾游",
      },
      {
        icon: "guide-o",
        text: "自由行",
      },
      {
        icon: "friends-o",
        text: "徒步",
      },
      {
        icon: "friends-o",
        text: "亲子游",
      },
      {
        icon: "flower-o",
        text: "露营",
      },
      {
        icon: "after-sale",
        text: "穷游",
      },
      {
        icon: "cashier-o",
        text: "购物",
      },
      {
        icon: "video-o",
        text: "摄影",
      },
      {
        icon: "video-o",
        text: "人文",
      },
      {
        icon: "video-o",
        text: "省钱",
      },
    ];
  };
  const GridArr = ref(getGridList());
  return {
    GridArr,
  };
});
