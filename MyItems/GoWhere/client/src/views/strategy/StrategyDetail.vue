<template>
    <div class="flex justify-between items-center">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        class="w-[360px]"
        shape="round"
        clearable
        @input="debounceSearch(value)"
        @cancel="router.back"
      />
    </div>
</template>

<script setup>
//引入lodash 的debounce
import { debounce } from "lodash";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const value = ref("");
const debounceSearch = debounce((value) => {
  console.log(value);
}, 1000);
</script>

<style scoped></style>
