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
      class="flex justify-between items-center w-screen rounded-md mt-2 h-[70px] bg-gray-500 p-3"
    >
      <List :item="item" :key="item.id" />
    </div>
    <div v-if="loading" class="text-center">loading...</div>
    <div v-if="!noMoreData" class="text-center">没有更多数据了</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "@/api";
import Search from "@/views/layout/Search.vue";
import List from "@/components/strategy/List.vue";
import { ref, onBeforeMount, reactive } from "vue";

const router = useRouter();
const name = ref("");
const items = ref([]);
const loading = ref(true);
const state = reactive({
  noMoreData: false,
  page: 1,
  pageSize: 10,
});
//跳转到攻略搜索页
const strategyDetail = async () => {
  router.push("/strategySearch");
};

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
  getStrategy();
});

const handleScroll = () => {
  // 获取页面滚动的高度
  const scrollY = window.scrollY;
  // 获取页面的总高度
  const pageHeight = document.documentElement.scrollHeight;
  // 获取视口的高度
  const windowHeight = window.innerHeight;

  // 判断是否滚动到页面底部
  if (scrollY + windowHeight >= pageHeight - 100 && !loading.value) {
    // 加载更多数据
    getStrategy();
  }
};

const getStrategy = async () => {
  const { data } = await axios.get("/strategy", {
    params: {
      page: state.page,
      pageSize: state.pageSize,
    },
  });
  loading.value = false;
  state.page++;
  if (data.data.length === 0) {
    state.noMoreData = true;
  }

  if (data.code == "8000") {
    console.log(data.data);
    items.value = [...items.value, ...data.data];
  } else {
    alert(data.msg);
  }
};
</script>

<style scoped></style>
