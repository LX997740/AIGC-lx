import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { lazyLoadDirective } from "@/utils/lazyLoad.js";

//引入样式
//移动端适配
// import "lib-flexible";
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
  Search,
  Grid,
  GridItem,
  List,
  Icon,
} from "vant";
import "vant/lib/index.css";

const app = createApp(App);
const store = createPinia();
//自定义懒加载指令
app.directive("lazy", lazyLoadDirective);

app.use(Tabbar);
app.use(TabbarItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Search);
app.use(Grid);
app.use(GridItem);
app.use(List);
app.use(Icon);

app.use(store);
app.use(router);

app.mount("#app");
