# 复杂组件设计

- 搜索组件

  - tailwindcss
    - 原子化
    - 1 0.25rem
      h- px/16/4

- components

  - 一般业务组件
  - common
    - 通用组件
  - layout 布局组件

- 项目亮点
  - 在搜索时候使用了防抖，做了性能优化，lodash js 的业务框架
- 简历

  - 先完成再完美
  - pdf
  - 超级简历 格式
  - 不要有错别字

- 搜索功能介绍

  - 用到了 vue 全家桶 + ts + tailwindcss,项目结构清晰合理
  - 使用 ElmentPlue 提供的 El-Popover ElInput,实现了搜索热点，搜索结果的展示
  - 使用 lodash 的 debounce 函数，完成搜索性能优化
  - 歌曲播放数，使用了拓展 Number 原型链的方式优化展示
  - 充分的数据流设计，将应用开发分为 UI 组件+store

- 给面试官介绍 pinia 使用

  - 数据驱动界面
  - 选用 pinia 更简单 更 hooks 化
  - 基于 dev-tools 页面状态和数据状态统一
  - 搜索模块数据流的专门设计
    - state showSearchView searchKeyWord
    - getters showHot
    - actions suggest

- 请接受一个你设计的比较复杂的组件
  - 搜索组件
  - 状态比较复杂
    - 除了 keyword searchResult 外，我还打理了 showPopview hotlist
  - 引入 pinia 并提前设计了数据流
  - suggest 组件的粒度很 ok
    - searchPopover
      - ELPopOver
        - ELInput slot
        - searchSuggest
  - 还使用了 TS models 定义了 interfaces
