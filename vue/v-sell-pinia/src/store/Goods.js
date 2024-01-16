//hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";
import { getGood } from "../api";

//仓库的分支,Goods
//专注于数据编程
export const useGoodsStore = defineStore("Goods", () => {
  const Goods = ref({});
  const getGoods = async () => {
    if (Goods.value.length) return;
    Goods.value = await getGood();
    // console.log(Goods.value);
  };
  return {
    Goods,
    getGoods,
  };
});
