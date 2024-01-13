<template>
  <div v-if="suggestData" v-for="order in suggestData.order">
    <div class="pt-2 pb-1.5 px-2.5">{{ order }}</div>
    <!-- 歌曲循环显示 -->
    <div
      v-for="item in suggestData.songs"
      :key="item.id"
      v-if="order === 'songs'"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
      @click="play(item.id)"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1"> - {{ item.artists[0]?.name }}</span>
    </div>
    <!-- 歌单的循环显示 -->
    <div
      v-for="item in suggestData.albums"
      :key="item.id"
      v-if="order === 'albums'"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
      @click="routerPush('album', item.id)"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1"> - {{ item.artist.name }}</span>
    </div>
    <!-- 歌手循环显示 -->
    <div
      v-for="item in suggestData.artists"
      :key="item.id"
      v-if="order === 'artists'"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
      @click="routerPush('artistDetail', item.id)"
    >
      <el-avatar size="small" :src="item.img1v1Url" />
      <span class="text-emerald-500 ml-2">{{ item.name }}</span>
    </div>

    <div
      v-for="item in suggestData.playlists"
      :key="item.id"
      v-if="order === 'playlists'"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
      @click="routerPush('playlist', item.id)"
    >
      <el-avatar size="small" :src="item.coverImgUrl" />
      <div class="text-emerald-500 ml-2 truncate flex-1 w-1">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const { suggestData } = storeToRefs(useSearchStore());
const play = (id: number) => {};
const routerPush = (path: string, id: number) => {
  router.push({ path, query: { id } });
};
</script>

<style scoped></style>
