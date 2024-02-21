<template>
  <div></div>
</template>

<script setup>
import { ref } from "vue";
const str = ref("hello");
console.log(str.value); //hello
nextTick(() => {
  str.value = "world";
  console.log(str.value); // world
});
</script>

<style lang="scss" scoped></style>
