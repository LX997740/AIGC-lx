import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import router from './router'


const app = createApp(App)
app
    .use(createPinia())//统一管理数据 会计
    // .use(router)//SPA
    .mount('#app')//UI组件
