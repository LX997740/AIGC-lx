<template>
  <!-- 登录页面 -->
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input
            autofocus
            v-model="param.username"
            placeholder="请输入用户名"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="subminFrom(login)"
          />
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="subminFrom(login)">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { reactive, ref } from "vue";
import { usePermissStore } from "../store/permiss";
import { useRouter } from "vue-router";

const permiss = usePermissStore();
const router = useRouter();
//账号密码类型
type LoginInfo = {
  username: string;
  password: string;
};
//和ref区别 复杂的reactive对象
const param = reactive<LoginInfo>({
  username: "",
  password: "",
});
//标注一个DOM节点
const login = ref<any>();

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

//submit event  elementplus formEl
const subminFrom = (formEl: FormInstance | null) => {
  if (!formEl) {
    return;
  }
  formEl.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("登录成功");
      //存储用户名和key
      localStorage.setItem("ms_username", param.username);
      const keys =
        permiss.roleList[param.username === "admin" ? "admin" : "user"];
      localStorage.setItem("ms_keys", JSON.stringify(keys));
      //将key存入仓库
      permiss.setKeys(keys);
      router.push("/Dashboard");
    } else {
      ElMessage.error("请填写完整");
      return false;
    }
  });
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
