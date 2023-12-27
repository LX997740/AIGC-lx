# 路由

服务端用于描述路径的
前端借鉴路由的称呼来描述,url 和 组件的映射关系

# 实现路由需要解决的问题

1. 如何修改 url, 还不引起页面刷新
2. 如何知道 url 变化了

# hash

在浏览器 url 后拼接 #\*\*\*\* 会被认为是 hash 值 ,而 hash 值的变更,不会引起浏览器页面的刷新的

- 修改 url 的方式

1. a 标签
2. 浏览器的前进和后退
3. window.location
   以上方式导致 url 变更都会触发 hashchange 事件

# history
history 提供了一个pushState 方法 可以修改url不引起页面刷新
提供了popState,仅当浏览器前进后退时生效