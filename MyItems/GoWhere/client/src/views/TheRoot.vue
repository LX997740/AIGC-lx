<template>
  <div>
    <div class="mb-12">
      <RouterView />
    </div>
    <div>
      <TheBar />
    </div>
  </div>
</template>

<script setup>
import TheBar from "@/views/layout/TheBar.vue";
</script>

<style scoped></style>
