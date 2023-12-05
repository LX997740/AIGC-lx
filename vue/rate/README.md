# Vue 3 + vite
- vue 脚手架
    - npm init vite
    1. 初始化 vue项目 , 下载了项目模板 starter
    2. vite 快
        - cd rate 项目目录
          - /src 开发目录
        - npm i  安装项目依赖
          - vue 3.0+
          - vite
        - npm run dev
            位于scripts脚本区
        - npm run build
            得到 dist目录
        - 把页面按组件划分
            每个组件都是一个vue文件
            - html 结构
            - scripts js
            - style css
- 组件化思想
  - component
    在vue之前 开发单元是html标签 没有复用性
    vue 提供了组件的概念 组件天生可复用
    组件是一对html css js的集合 ,完成某个展示和功能
    开发任务的拆分

- DOM 树->组件树
	这个组件做过，可以不用写
	.vue 组件的思想 有利于分工 复用  优化
- devtool 
- 数据 MVVM思想
  - ref 响应式 
- Laf 