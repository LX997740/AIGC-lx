<template>
  <div class="h-screen w-screen">
    <h1 class="text-2xl font-bold text-center py-8 w-screen">注册</h1>
    <!-- 注册 -->
    <div class="p-10">
      <!-- 头像 -->
      <div class="w-full flex justify-center">
        <img src="../assets/img/unnamed.jpg" class="w-20 h-20 rounded-full" />
      </div>
      <van-form @submit="register">
        <van-cell-group inset>
          <!-- 电话号码 -->
          <van-field
            autofocus
            v-model="phone"
            name="电话号码"
            label="电话"
            placeholder="电话号码"
            :rules="[{ required: true, message: '请填写电话号码' }]"
            left-icon="phone"
          />
          <!-- 昵称 -->
          <van-field
            v-model="username"
            type="username"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
            left-icon="user"
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
        <!-- 注册按钮 -->
        <div class="mt-5">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>
        <div class="text-right" @click="toLogin">点击返回登录</div>
        <!-- 用户协议 -->
        <van-field name="checkbox" class="mt-20">
          <template #input>
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
import { useRegisterStore } from "../store/useRegisterStore";
import { storeToRefs } from "pinia";

const { username, phone, password, checked } = storeToRefs(useRegisterStore());
const { register, toLogin } = useRegisterStore();
</script>

<style scoped></style>
