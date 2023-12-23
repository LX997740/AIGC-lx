# typescript 
   - 让前端像写JAVA一样写大型项目  代码一万行+
   - vue/react + typescript
   - es6 
      弱类型还是没有, 缺点:容易出问题
      let banners:int[] = [1,2,3]
   - typescript 是js的超集
   - 给项目引入前端模型层
     - 路由已经不是后端的,前端也可以有
     - 前端也可以有自己的模型,MVVM

# UI组件和数据管理的分离
  - store/component | views
  - pinia defineStore('todos',()=>{
      return {
         state,
         ...actions
      }
   })  useTodosStore()  

   - vue ref
   - 这里是唯一请求axios 接口的地方
   - createApp(App).use(createPinia()).mount('#app')
   - 引入这个模块，执行useTodosStore()
   const {todos} = toRef(useTodosStore()) //state 状态
   const {getTodos} = useTodosStore() //action 方法

# vue项目开发设计模式
   - 越复杂的,只要是流程,其实很简单,只不过需要一本说明书
   - UI组件 + 数据管理
   - 数据的流向,
      backend ->models(约束) -> api -> store -> component
   - SPA
      router -> views -> components
   - APP = VUE +VueRouter + Pinia + TS
   - 写UI组件
      ELementPlus (熟悉) + views + components(common | components) + Tailwindcss(亮点)+ 组件设计艺术
- App.vue 一个个组件慢慢搭
   <> defineProps
   - 不要用TS , 写完就好了