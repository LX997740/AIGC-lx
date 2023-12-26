//hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";
import { getSeller } from "../api";

//仓库的分支,seller
//专注于数据编程
export const useSellersStore = defineStore("seller", () => {
  const Seller = ref([]);
  const getSellers = async () => {
    if (Seller.value.length) return;
    Seller.value = await getSeller();
    console.log(Seller.value);
  };
  return {
    Seller,
    getSellers,
  };
});
