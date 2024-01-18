import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

//引入样式
//移动端适配
import "lib-flexible";
import "@/assets/main.css";
//引入重置样式
import "@/assets/style/reset.css";

//引入vant组件
import {
  Tabbar,
  TabbarItem,
  Form,
  Field,
  CellGroup,
  Button,
  Checkbox,
  CheckboxGroup,
} from "vant";
import "vant/lib/index.css";

const app = createApp(App);
const store = createPinia();

app.use(Tabbar);
app.use(TabbarItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(Checkbox);
app.use(CheckboxGroup);

app.use(store);
app.use(router);

app.mount("#app");
