<template>
  <div class="header">
    <!-- 折叠侧边栏 -->
    <div class="collapse-btn" @click="collapseChange">
      <el-icon v-if="collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <!-- 个人中心 -->
      <div class="header-user-con">
        <!-- 消息通知 -->
        <div class="btn-bell" @click="router.push('/tabs')">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="buttom"
          >
            <i class="el-icon-lx-notice" style="width: 20px; height: 20px"></i>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message">2</span>
        </div>
        <!-- 用户头像 -->
        <el-avatar class="user-avatar" :size="30" :src="imgurl"> </el-avatar>
        <!-- 用户名下拉列表 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon class="el-icon-right">
              <arrow-down />
            </el-icon>
          </span>
          <!-- 插槽 slot -->
          <template #dropdown>
            <el-dropdown-menu>
              <a href="#" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imgurl from "../assets/img/img.jpg";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useSideBarStore } from "../store/sidebar";

const router = useRouter();
//侧边栏的收缩
const sidebarSrore = useSideBarStore();
const collapse = computed(() => {
  return sidebarSrore.collapse;
});
const collapseChange = () => {
  sidebarSrore.handleCollapse();
};

const message: number = 1;
const handleCommand = (command: string) => {
  if (command === "loginout") {
    localStorage.removeItem("ms_username");
    router.push("/login");
  } else if (command === "user") {
    router.push("/user");
  }
};
const username = localStorage.getItem("ms_username");
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  float: left;
  padding: 0 21px;
  cursor: pointer;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.btn-bell-badge {
  position: absolute;
  right: 4px;
  top: 0px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-lx-notice {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avatar {
  margin-left: 20px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
