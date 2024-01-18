<template>
  <div>
    <p class="text-base font-bold m-2.5">推荐</p>

    <div
      class="m-2.5 h-[200px] overflow-hidden bg-[#7d89b9] rounded-[5px] flex items-center"
    >
      <!-- 左边 -->
      <div class="flex flex-col relative">
        <!-- 图片 -->
        <img
          class="w-[260px] h-[200px] rounded-[5px]"
          :src="recommend[Index].img"
          alt=""
        />
        <!-- 文字 -->
        <div class="text-white text-[14px] absolute bottom-0 p-2">
          <p>{{ recommend[Index].title }}</p>
          <div class="flex mt-2">
            <img
              class="w-[20px] h-[20px] rounded-[50%]"
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
          class="w-[100px] h-[50px]"
          v-for="(item, index) in recommend.slice(0, 4)"
          :key="index"
        >
          <img
            class="w-[100px] h-[40px] rounded-[25px]"
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
import { ref } from "vue";
const { Recommend } = storeToRefs(useRecommendStore());

const recommend = Recommend.value;
const Index = ref(0);
</script>

<style scoped></style>
