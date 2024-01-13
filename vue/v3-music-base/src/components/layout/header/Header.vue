<template>
  <!-- tailwindcss 原子化 -->
  <div class="flex item-center justify-between h-14">
    <div class="flex items-center pl-5">
      <IconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="router.back()"
      />
      <IconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <div class="search ml-2">
        <SearchPop />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPark from "@/components/common/IconPark.vue";
import { Left, Right } from "@icon-park/vue-next";
import SearchPop from "@/components/layout/header/SearchPop.vue";
// 使用vue-router提供的useRouter提供的hook 函数获得路由对象
import { useRouter } from "vue-router";
const router = useRouter();

const iconSize = 22;
</script>

<style scoped></style>
