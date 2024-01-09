import axios from "axios";
import { showFailToast } from "vant";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";

//请求拦截

//响应拦截
axios.interceptors.response.use((res) => {
  //程序错误
  if (res.status !== 200) {
    showFailToast("服务器开小差去了");
  } else {
    //逻辑性错误
    if (res.data.code !== "8000") {
      showFailToast(res.data.msg);
      return Promise.reject(res);
    } else {
      return res;
    }
  }
});

export default axios;
