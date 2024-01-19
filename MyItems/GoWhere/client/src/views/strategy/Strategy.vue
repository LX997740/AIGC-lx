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
    <div class="text-2xl font-bold">推荐攻略群</div>
    <div v-if="strategyList.length">
      <div v-for="strategy in strategyList" :key="strategy.id">
        <div>
          {{ strategy.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "@/views/layout/Search.vue";
import { ref } from "vue";
import { useStrategyStore } from "@/store/useStrategyStore";
import { storeToRefs } from "pinia";

const search = ref("");
const { strategyList } = storeToRefs(useStrategyStore());

console.log(strategyList);
</script>

<style scoped></style>
