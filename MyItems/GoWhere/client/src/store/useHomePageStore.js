import { defineStore } from "pinia";
import { ref } from "vue";

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
