<template>
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>
<style lang="less"></style>
