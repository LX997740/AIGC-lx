<template>
  <div>
    <div class="text-white">{{ item.name }}攻略交流群</div>
    <div class="text-yellow-500">{{ item.count }}人已加入</div>
  </div>
  <button class="bg-blue-500 rounded-md px-5 py-2 text-yellow-500 w-[115px]">
    加入群聊+
  </button>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  item: Object,
});
const { item } = toRefs(props);
</script>

<style scoped></style>
