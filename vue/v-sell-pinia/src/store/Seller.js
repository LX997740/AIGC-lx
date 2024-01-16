//hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";
import { getSeller } from "../api";

//仓库的分支,seller
//专注于数据编程
export const useSellersStore = defineStore("seller", () => {
  const Sellers = ref({});
  const getSellers = async () => {
    if (Sellers.value.length) return;
    Sellers.value = await getSeller();
    // console.log(Sellers.value);
  };
  return {
    Sellers,
    getSellers,
  };
});
