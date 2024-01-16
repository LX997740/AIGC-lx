//hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";

//仓库的分支,首页的仓库
//专注于数据编程
export const useHeaderStore = defineStore("Header", () => {
  const detailShow = ref(false);

  const showDetail = () => {
    detailShow.value = true;
  };
  const closeDetail = () => {
    detailShow.value = false;
  };
  return {
    detailShow,
    showDetail,
    closeDetail,
  };
});
