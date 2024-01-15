<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/strategy">攻略群</van-tabbar-item>
    <van-tabbar-item icon="bag-o" to="/shopping">商城</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/account">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<style scoped></style>
