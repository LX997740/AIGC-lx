// main.js 入口文件
import { createApp } from 'vue'
// import './style.css'
//根组件 组件开发是vue开发的基本根源
import App from './App.vue'

//原生js DOM编程 低效 #app vue开创新世界 mvvm的世界
// 原生js不支持mvvm
createApp(App).mount('#app')