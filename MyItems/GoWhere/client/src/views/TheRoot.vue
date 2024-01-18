<template>
  <div class="h-screen w-screen">
    <RouterView />
    <TheBar />
  </div>
</template>

<script setup>
import TheBar from "@/views/layout/TheBar.vue";
</script>

<style scoped></style>
