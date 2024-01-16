import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "../api";
import { showSuccessToast, showFailToast } from "vant";

export const useLoginStore = defineStore("login", () => {
  const router = useRouter();
  const username = ref("");
  const password = ref("");
  const checked = ref(false);

  //登录函数
  const login = async () => {
    //验证是否勾选了协议
    if (checked.value == false) {
      showFailToast("请勾选同意协议");
      return;
    }
    //发请求给后端验证登录
    const res = await axios.post("/login", {
      username: username.value,
      password: password.value,
    });
    //保存token
    localStorage.setItem("token", res.data.token);
    try {
      if (res.data.code === "8000") {
        showSuccessToast("登录成功");
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //跳转注册页面
  const toRegister = () => {
    router.push("/register");
  };
  return {
    username,
    password,
    checked,
    login,
    toRegister,
  };
});
