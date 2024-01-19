import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../api";

export const useStrategyStore = defineStore("strategy", () => {
  const strategyList = ref([]);
  const strategy = async () => {
    try {
      //发请求给后端
      const res = await axios.get("/strategy");
      if (res.data.code === "8000") {
        return res.data.data;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const res = strategy();
  if (res) {
    strategyList.value = res;
  } else {
    strategyList.value = [];
  }
  return {
    strategyList,
  };
});
