<template>
  <!-- 推荐4个 -->
  <div>
    <p class="text-base font-bold m-2.5">推荐</p>

    <div
      class="m-2.5 h-[20rem] overflow-hidden rounded-[25px] flex items-center"
    >
      <!-- 左边 -->
      <div class="flex flex-col relative">
        <!-- 图片 -->
        <img
          class="w-[26rem] h-[20rem] rounded-[5px]"
          :src="recommend[Index].img"
          alt=""
        />
        <!-- 文字 -->
        <div class="text-white text-[14px] absolute bottom-0 p-2">
          <p>{{ recommend[Index].title }}</p>
          <div class="flex mt-2">
            <img
              class="w-[2rem] h-[2rem] rounded-[50%]"
              src="@/assets/img/unnamed.jpg"
              alt=""
            />
            <span class="ml-2">{{ recommend[Index].name }}</span>
            <span class="ml-2">我在 · {{ recommend[Index].area }} </span>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div>
        <div
          class="w-[10rem] h-[5rem]"
          v-for="(item, index) in recommend.slice(0, 4)"
          :key="index"
        >
          <img
            class="w-[10rem] h-[4rem] rounded-[25px]"
            :src="item.img"
            alt=""
            @click="()=> Index = index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecommendStore } from "@/store/useHomePageStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const { Recommend } = storeToRefs(useRecommendStore());

const recommend = Recommend.value;
const Index = ref(0);
onMounted(() => {
  setInterval(() => {
    Index.value = Index.value + 1;
    if (Index.value > 3) {
      Index.value = 0;
    }
  }, 2000)
})
</script>

<style scoped></style>
