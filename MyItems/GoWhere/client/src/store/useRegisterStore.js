import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "../api";
import { showSuccessToast, showFailToast } from "vant";

export const useRegisterStore = defineStore("register", () => {
  const router = useRouter();
  const phone = ref("");
  const username = ref("");
  const password = ref("");
  const checked = ref(false);

  const toLogin = () => {
    router.push("/login");
  };

  const register = async () => {
    // 验证是否勾选协议
    if (checked.value == false) {
      showFailToast("请勾选同意协议");
      return;
    }
    //发请求给后端
    const res = await axios.post("/register", {
      phone: phone.value,
      username: username.value,
      password: password.value,
    });
    try {
      if (res.data.code === "8000") {
        showSuccessToast("注册成功");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (e) {
      showFailToast("注册失败");
    }
  };

  return {
    phone,
    username,
    password,
    checked,
    toLogin,
    register,
  };
});
