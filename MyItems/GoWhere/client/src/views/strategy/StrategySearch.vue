<template>
  <div>
    <Search>
      <template #Strategy>
        <div class="flex justify-between items-center">
          <van-search
            v-model="name"
            placeholder="请输入搜索关键词"
            class="w-[360px]"
            shape="round"
            clearable
            autofocus
            show-action
            @search="onSearch"
            @cancel="router.back"
            @input="debounceSearch"
          />
        </div>
      </template>
    </Search>
  </div>
</template>

<script setup>

import { debounce } from "lodash";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Search from "@/views/layout/Search.vue";

const router = useRouter();
const name = ref("");
const debounceSearch = debounce(()=>{
  console.log(name.value);
}, 500);

//跳转到详情界面
const onSearch = () => {
  router.push({
    path: "/strategyDetail",
    query: {
      //搜索的关键词
      name: name.value,
    },
  });
};
</script>

<style scoped></style>
