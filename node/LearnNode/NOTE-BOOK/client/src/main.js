import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible"; // 自动设置根字体大小
import "./assets/style/reset.css";
import router from "./router";

import { Button, Form, Field, CellGroup } from "vant";
import "vant/lib/index.css";

const app = createApp();
app.use(Form);
app.use(Field);
app.use(CellGroup);

createApp(App)
  .use(router)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .mount("#app");
