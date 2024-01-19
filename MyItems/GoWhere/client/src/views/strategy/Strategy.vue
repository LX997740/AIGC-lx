<template>
  <div>
    <Search>
      <template #Strategy>
        <div class="flex justify-between items-center">
          <van-search
            v-model="search"
            placeholder="请输入搜索关键词"
            class="w-[360px]"
            shape="round"
          />
          <van-icon name="chat-o" class="h-[30px] w-[40px]" />
        </div>
      </template>
    </Search>
    攻略群
  </div>
</template>

<script setup>
import Search from "@/views/layout/Search.vue";
import { ref } from "vue";

const search = ref();
</script>

<style scoped></style>
