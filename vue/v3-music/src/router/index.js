//完成路由的配置 url=>component
import { createRouter, createWebHashHistory } from 'vue-router'
//pc 兼容性
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            // App.vue用来挂载的不是用来写具体的
            
            component: () => import('@/views/Root.vue')
        },
        {

        },
    ]
})
export default router