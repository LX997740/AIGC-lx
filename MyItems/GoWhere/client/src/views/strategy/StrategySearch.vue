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
          />
        </div>
      </template>
    </Search>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Search from "@/views/layout/Search.vue";
const router = useRouter();
const name = ref("");

const onSearch = () => {
  router.push({
    path: "/strategyDetail",
    query: {
      name,
    },
  });
};
</script>

<style scoped></style>
