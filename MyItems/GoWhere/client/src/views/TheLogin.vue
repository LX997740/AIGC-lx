<template>
  <div class="h-screen w-screen">
    <h1 class="text-2xl font-bold text-center my-10">登录</h1>
    <!-- 登录表单 -->
    <div class="flex items-center justify-center mt-20">
      <van-form @submit="login">
        <van-cell-group inset>
          <!-- 用户名 -->
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <!-- 密码 -->
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <!-- 登录按钮 -->
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
        <div class="text-right" @click="toRegister">无账号？点击注册</div>

        <van-field name="checkbox" class="mt-20">
          <template #input>
            <van-checkbox v-model="checked" shape="square" />
            <span class="text-xs ml-2">
              我同意
              <a href="#">《用户协议》</a>和
              <a href="#">《使用条款》</a>
            </span>
          </template>
        </van-field>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from "../store/useLoginStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { username, password } = storeToRefs(useLoginStore());
const { login, toRegister } = useLoginStore();

const checked = ref(true);
</script>

<style scoped></style>
