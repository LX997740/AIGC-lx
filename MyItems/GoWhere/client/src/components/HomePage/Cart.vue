<template>
  <div class="">
    <div class="relative">
      <img :src="item.img" class="w-full h-40" />
      <span class="absolute bottom-0 left-0 px-2 py-1 text-white">{{
        item.area
      }}</span>
    </div>
    <span>{{ item.title }}</span>
    <div class="flex justify-between">
      <span>{{ item.name }}</span>
      <span>{{ item.count }}</span>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  item: Object,
});
const { item } = toRefs(props);
</script>

<style scoped></style>
