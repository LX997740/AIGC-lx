<template>
  <div class="w-1/2">
    <div class="">
      <img src="" alt="" />
      <span>北海道</span>
    </div>
    <span>我的推荐</span>
    <div class="flex justify-between">
      <span>行走地区</span>
      <span>9999</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  item: Object,
});
const item = defineProps.item;
console.log(item);
</script>

<style scoped></style>
