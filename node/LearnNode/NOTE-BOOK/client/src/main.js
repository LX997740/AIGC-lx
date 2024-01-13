import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible"; // 自动设置根字体大小
import "./assets/style/reset.css";
import router from "./router";
import { createPinia } from "pinia";

import {
  Button,
  Form,
  Field,
  CellGroup,
  Icon,
  Uploader,
  ActionSheet,
} from "vant";
import "vant/lib/index.css";

const app = createApp(App);
const store = createPinia();

app
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Icon)
  .use(Button)
  .use(Uploader)
  .use(ActionSheet)
  .use(store)
  .use(router)

app.mount("#app");
