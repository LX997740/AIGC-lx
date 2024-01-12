# 何为 TS ？

TypeScript 是 JavaScript 的一个超集，它在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。

# 如何使用 TS

- 像 js 一样来写
- 加点啥
  - 类型检测
    - 你在乎的地方加 -》数据

## 项目亮点

- 使用了 Elementplus

  - 登录 注册页 表单功能

    - 表单的目的是收集数据 :model="" 进行双向绑定

      - 每一个 el-input v-model = ".username"

    - 表单的校验配置下就
    - 用户体验做好

      - 自动聚焦
      - @keyup.enter

    - ref 属性 DOM 标记

      - const login = ref()
      - mouted <form ref = "login">

    - 表单提交
      - vaildate

- 为什么 element-plus 图片要搞得这么复杂呢
  - 按需加载
    - 图标库有点大，如果用户使用了别的图标，省空间
  - 其他的选择
  - 单独安装图标
    - app.component 全局挂载一下 用到哪些就挂载哪些

## ts

- 写 js 就好 再做点加法
- 最关心的数据
  - ref reactive
  - props
  - store
- 函数的参数

## vue 考题

- <component  :is="comName"/>
    循环或动态输出组件
- <template />
    模板 slot 
    不会显示在页面上   接受指令 不想添加标签时

## 项目亮点

- 带有角色校验的菜单
  - 菜单
    el-menu>el-sub-menu>el-menu-item
  - 当前选中的菜单
    :dafault-active="route.path"
  - 哪些菜单可以看见
    指令？自定义指令
    store ->premiss roleList user include?
    添加一个数据项 key 任何地方都可以调用
  - 自定义指令
    app.directive(name)
    v-name
    mounted(el,binding)
    el-['hidden'] =true

## 项目难点

多组件的共享和设计

- vuex 和 pinia

  - 用 pinia vuex modeuls 很灵活
    - 不需要遵守 vuex 的树状约束 只需要执行下函数就能拿到 hooks
    - 语法简洁
  - 学 vuex 设计模式
    vuex (state,mutation,action,getter)安全但麻烦

- 学习过一下项目 github 开源的 vue-admin...
- 因为当我在多个组件，特别是兄弟特别是跨页面组件有共享状态需求时，我把它封装成 store 函数
  原来是用 ref+props+emit换成store