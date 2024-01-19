<template>
  <van-grid :column-num="5" :border="false">
    <van-grid-item
      v-for="item in GridArr"
      :key="item.id"
      :icon="item.icon"
      :text="item.text"
    />
  </van-grid>
</template>

<script setup>
import { useGridStore } from "@/store/useHomePageStore";
import { storeToRefs } from "pinia";

const { GridArr } = storeToRefs(useGridStore());
</script>

<style scoped></style>
