import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../api";
import { useRouter } from "vue-router";
import { showSuccessToast } from "vant";

//用户登录仓库
export const useLoginStore = defineStore("login", () => {
  const router = useRouter();
  const username = ref("");
  const password = ref("");

  const onSubmit = async () => {
    //发请求,将用户名和密码传给后端
    const res = await axios.post("/login", {
      username: username.value,
      password: password.value,
    });
    //将后端传来的token放入本地存储中
    // console.log(res.data);
    localStorage.setItem("token", res.data.token);
    try {
      if (res.data.code === "8000") {
        router.push("/noteclass");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return {
    onSubmit,
    username,
    password,
  };
});

//用户注册仓库
export const useRegisterStore = defineStore("Register", () => {
  const router = useRouter();
  const username = ref("");
  const password = ref("");
  const nickname = ref("");

  //注册
  const onSubmit = async () => {
    //发请求,将用户名和密码，昵称传给后端
    const res = await axios.post("/register", {
      username: username.value,
      password: password.value,
      nickname: nickname.value,
    });
    //判断是否注册成功如果注册成功，跳转到登录页面,
    showSuccessToast(res.data.msg);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };
  return {
    onSubmit,
    username,
    password,
    nickname,
  };
});
