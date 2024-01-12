<template>
  <!-- 菜单 -->
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      :collapse="collapse"
      :default-active="route.path"
      router
    >
      <!-- slot 自定义组件的内部 -->
      <!-- 循环输出菜单 -->
      <template v-for="item in items">
        <!-- 如果有第二次菜单，则输出二级菜单 -->
        <template v-if="item.subs">
          <el-sub-menu
            :index="item.index"
            :key="item.index"
            v-premiss="item.premiss"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" v-premiss="item.premiss">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 循环输出第一层菜单 -->
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
            v-premiss="item.premiss"
          >
            <el-icon>
              <!-- component组件的占位符 表示我先占位 我是个组件 通过:is="item.icon"来确定组件名-->
              <component :is="item.icon" />
            </el-icon>
            <template #title>
              {{ item.title }}
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
//侧边栏收缩
import { useSideBarStore } from "../store/sidebar";
const sidebarStore = useSideBarStore();
const collapse = computed(() => sidebarStore.collapse);

const route = useRoute();
const items = [
  {
    icon: "Odometer",
    index: "/dashboard",
    title: "系统首页",
    premiss: "1",
  },
  {
    icon: "Calendar",
    index: "1",
    title: "表格相关",
    premiss: "2",
    subs: [
      {
        index: "/table",
        title: "常用表格",
        premiss: "2",
      },
      {
        index: "/import",
        title: "导入Excel",
        premiss: "2",
      },
      {
        index: "/export",
        title: "导出Excel",
        premiss: "2",
      },
    ],
  },
  {
    icon: "Edit",
    index: "3",
    title: "表单相关",
    premiss: "4",
    subs: [
      {
        index: "/form",
        title: "基本表单",
        premiss: "5",
      },
      {
        index: "/upload",
        title: "文件上传",
        premiss: "6",
      },
    ],
  },
];
</script>

<style scoped></style>
