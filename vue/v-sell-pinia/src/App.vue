<template>
  <VsHeader />
  <!-- tab -->
  <div class="tab">
    <div class="tab-warpper">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-warpper">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-warpper">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import VsHeader from "./components/header/VsHeader.vue";
</script>
<style lang="less">
@import "./common/style/reset.css";
@import "./common/style/variable.less";

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
