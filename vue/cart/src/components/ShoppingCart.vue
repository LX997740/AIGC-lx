<template>
  <div>
    <div v-for="item in cart">
      <p>{{ item.id }}</p>
      <p>{{ item.quantity }}</p>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
//接受数据
const cart = computed(() => store.state.cart.items);
</script>

<style scoped></style>
