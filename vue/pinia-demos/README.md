# vue3 全家桶

- vue 响应式组件开发
  - components
    - common
    - 业务组件
  - views/
  - UI组件库 element-plus

- vue-router  让前端有了路由
  SPA 快 不需要做传统的http request+response
  页面不会白一下 
  缺点: SEO

- vuex/pinia   财务
    前端可以管理数据了
    1. 确保数据流的正确性
        数据在组件里叫什么? 状态 
    2. 将数据与组件剥离 , UI组件更单纯

- vue 项目 数据从后端到页面显示经过的所有流程和关键环节

    mysql/mongondb  db/todos table
    sql
    java/node 内存 MVC
    router
    res
    http GET :3000/todos
    axios http.js  axios.js index.js
    store actions->mutation->state
    由外到内 组件 viwes/->props 传给子组件(UI化)
    UIcomponent +Stat  = App

- pinia?
  - 比vuex更简单
    store/todo.js defineStore 返回值命名 use开头 useTodoStore()
    函数返回state
    import{useTodoStore} from'./store/todo.js'
    const {todos} = useTodoStore()
  - 更现代
    hooks编程 use开头
  - 将数据和UI组件分离