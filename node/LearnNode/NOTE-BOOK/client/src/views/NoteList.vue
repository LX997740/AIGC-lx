<template>
  <div class="note-list" v-if="items">
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id" @click="goNoteDetail(item.id)">
        <div class="img">
          <img :src="item.head_img" alt="" />
        </div>
        <p class="time">{{ item.m_time }}</p>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <p class="emity" v-else>当前分类还没有文章哦</p>
  </div>
</template>

<script setup>
//页面加载中发请求拿到当前分类的数据
import axios from "../api";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute(); //当前页面详情
const router = useRouter(); //路由实例
const items = ref();

onBeforeMount(async () => {
  const { data } = await axios.post("/noteList", {
    note_type: route.query.title,
  });
  if (data.code === "8000") {
    items.value = data.data;
  }
});
const goNoteDetail = (id) => {
  router.push({
    path: "/noteDetail",
    query: {
      id,
    },
  });
};
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    li {
      img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }
      .time {
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title {
        width: 3.5rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
