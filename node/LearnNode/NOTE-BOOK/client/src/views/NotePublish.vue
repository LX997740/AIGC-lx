<template>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor
        theme="snow"
        placeholder="请输入笔记内容"
        v-model:content="state.content"
        content-type="html"
      />
    </div>
    <div class="note-wrap">
      <!-- 笔记内容 -->
      <div class="note-cell">
        <van-field
          v-model="state.title"
          label=" 标题"
          placeholder="请输入笔记标题"
        />
      </div>
      <!-- 笔记图片 -->
      <div class="note-cell">
        <van-field label="图片上传">
          <template #input>
            <van-uploader v-model="state.picture" multiple max-count="1" />
          </template>
        </van-field>
      </div>
      <!-- 笔记分类 -->
      <div class="note-cell">
        <div class="sort" @click="state.sortShow = true">
          <span>选择分类</span>
          <span>{{ state.note_type }} <van-icon name="arrow" /></span>
        </div>
        <van-action-sheet
          v-model:show="state.sortShow"
          :actions="actions"
          @select="onSelect"
        />
      </div>
    </div>
    <div class="btn">
      <van-button block round type="primary" @click="publish"
        >发布笔记</van-button
      >
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "../api";
import { reactive } from "vue";

const user = JSON.parse(sessionStorage.getItem("userInfo"));

const state = reactive({
  content: "",
  title: "",
  picture: [],
  sortShow: false,
  note_type: "美食",
});
const onSelect = (index) => {
  state.sortShow = false;
  state.note_type = index.name;
};
const actions = [
  { name: "美食" },
  { name: "旅行" },
  { name: "学习" },
  { name: "娱乐" },
  { name: "其他" },
];
const publish = async () => {
  const res = await axios.post("/publish", {
    note_content: state.content,
    title: state.title,
    head_img: state.picture[0].content,
    note_type: state.note_type,
    userId: user.data.id,
    nickname: user.data.nickname,
  });
  if (res.data.code === "8000") {
    alert("发布成功");
  }
};
</script>

<style lang="less" scoped>
.note-publish {
  min-height: 100vh;
  position: relative;
  .note-wrap {
    margin-top: 20px;
    .note-cell {
      border-bottom: 1px solid #d1d5db;
      .sort {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 3;
        padding: 10px 16px;
        color: #323233;
      }
    }
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    position: sticky;
    bottom: 10px;
  }
}
</style>

<style>
.ql-container.ql-snow {
  height: 200px;
}
</style>
