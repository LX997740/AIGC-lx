import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { usePermissStore } from "./store/permiss";

// import "element-plus/dist/index.css";
import "./assets/css/main.css";
import "./assets/css/color-dark.css";

//export import {} * as
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(createPinia()).use(router);
const permiss = usePermissStore();
//{a:1,b:2}
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component); //全局组件
}
//声明一个全局指令
app.directive("premiss", {
  mounted(el, binding) {
    if (!permiss.key.includes(String(binding.value))) {
      el["hidden"] = true;
    }
  },
});

app.mount("#app");
