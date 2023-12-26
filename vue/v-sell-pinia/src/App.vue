<template>
  <Header />
  <!-- tab -->
  <router-view />
</template>

<script setup>
import Header from "./components/header/VsHeader.vue";
</script>
<style lang="less">
@import "@/common/style/variable.less";

.tab {
  display: flex;
  height: 36px;

  &-warpper {
    flex: 1;
    text-align: center;
    line-height: 36px;

    a {
      text-decoration: none;
      color: @color-font;
      width: 100%;
      height: 100%;
      display: inline-block;
      &.router-link-active {
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}
</style>
