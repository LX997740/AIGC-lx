<template>
  <div class="h-screen w-screen">
    <h1 class="text-2xl font-bold text-center py-8 w-screen">登录</h1>
    <!-- 登录表单 -->
    <div class="p-10">
      <!-- 头像 -->
      <div class="w-full flex justify-center">
        <img src="@/assets/img/unnamed.jpg" class="w-20 h-20 rounded-full" />
      </div>
      <van-form @submit="login">
        <van-cell-group inset>
          <!-- 电话 -->
          <van-field
            autofocus
            v-model="phone"
            name="电话"
            label="电话"
            placeholder="请输入电话号码"
            :rules="[{ required: true, message: '请填写电话号码' }]"
            left-icon="phone"
          />
          <!-- 密码 -->
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            left-icon="lock"
          />
        </van-cell-group>
        <!-- 登录按钮 -->
        <div class="mt-5">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
        <div class="text-right mt-5">
          <span @click="toRegister">无账号？点击注册</span>
        </div>
        <!-- 用户协议 -->
        <van-field name="checkbox" class="mt-20">
          <template #input>
            <!-- 勾选了才能登录 -->
            <van-checkbox v-model="checked" />
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
import { useLoginStore } from "@/store/useLoginStore";
import { storeToRefs } from "pinia";

//从pinia仓库中获取登录信息
const { phone, password, checked } = storeToRefs(useLoginStore());
const { login, toRegister } = useLoginStore();
</script>

<style scoped></style>
