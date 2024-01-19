<template>
  <div>
    <Search>
      <template #home>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </template>
    </Search>
    <Grid />
    <Recommend />
    <div class="grid grid-cols-2 gap-4" v-lazy="{ Carts }">
      <div v-for="items in Carts" :key="items.id">
        <Cart :item="items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "@/views/layout/Search.vue";
import Grid from "@/components/HomePage/Grid.vue";
import Recommend from "@/components/HomePage/Recommend.vue";
import Cart from "@/components/HomePage/Cart.vue";

import { useCartStore } from "@/store/useHomePageStore";
import { storeToRefs } from "pinia";

const { Carts } = storeToRefs(useCartStore());
</script>

<style scoped></style>
