<template>
  <div>
    <!-- 组件内部可以被外部定制的东西 -->
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
