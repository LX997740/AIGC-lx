<template>
  <li class="todo" :class="{ completed: todo.done }"></li>
  <div class="view">
    <label v-text="todo.title"></label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  todo: Object,
});
</script>

<style scoped></style>
