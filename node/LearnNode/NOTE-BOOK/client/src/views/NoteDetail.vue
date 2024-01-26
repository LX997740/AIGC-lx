<template>
  <div class="note-detail" v-if="items">
    <div class="note-img">
      <img :src="items.head_img" alt="" />
    </div>
    <div class="note-content">
      <div class="tab">
        <div class="note_type">{{ items.note_type }}</div>
        <div class="author">{{ items.nickname }}</div>
      </div>
      <p class="title">{{ items.title }}</p>
      <p class="content" v-html="items.note_content"></p>
    </div>
  </div>
</template>

<script setup>
import axios from "../api";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const items = ref();

onBeforeMount(async () => {
  // 根据ID获取笔记数据
  const { data } = await axios.post("/noteDetail", {
    id: route.query.id,
  });
  if (data.code == "8000") {
    items.value = data.data[0];
  } else {
    alert(data.msg);
  }
});
</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .note-content {
    padding: 0.667rem;
    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;
      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }
    .title {
      margin: 0.5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }
    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>
