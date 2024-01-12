<template>
  <v-header> </v-header>
  <v-sidebar></v-sidebar>
  <div class="content-box" :class="{ 'content-collapse': collapse }">
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
import { useSideBarStore } from "../store/sidebar";
const sidebarSrore = useSideBarStore();
const collapse = computed(() => {
  return sidebarSrore.collapse;
});
</script>

<style scoped></style>
