<template>
  <div class="box">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>
