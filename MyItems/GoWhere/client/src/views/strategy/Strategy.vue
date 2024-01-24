<template>
  <div>
    <Search>
      <template #Strategy>
        <div class="flex justify-between items-center">
          <van-search
            v-model="name"
            placeholder="请输入搜索关键词"
            class="w-[360px]"
            shape="round"
            clearable
            @focus="strategyDetail"
          />
          <van-icon name="chat-o" class="h-[30px] w-[40px]" />
        </div>
      </template>
    </Search>
    <div class="text-2xl font-bold">推荐攻略群</div>
    <div
      v-for="item in items"
      :key="item.id"
      class="flex justify-between items-center w-screen rounded-md mt-2 h-[70px] bg-gray-500"
    >
      <List :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "@/api";
import Search from "@/views/layout/Search.vue";
import List from "@/components/strategy/List.vue";
import { ref, onBeforeMount } from "vue";
const router = useRouter();
const name = ref("");

const items = ref();

const strategyDetail = async () => {
  router.push("/strategySearch",);
};

onBeforeMount(async () => {
  const { data } = await axios.get("/strategy");

  if (data.code == "8000") {
    items.value = data.data;
  } else {
    alert(data.msg);
  }
});
</script>

<style scoped></style>
