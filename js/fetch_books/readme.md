# 全栈快速一览

- 前端 http 服务 将html/css/js请求到本地完成渲染
    5501/5500端口 前端启动的一个web服务
- 后端 接口 服务 
    在某个url上 返回json数据
    3000端口 
- 前后端分离
    json-server 快速把和后端数据server启动了
    - npm init -y 把项目变成一个后端项目
    - npm i json-server 给json就可以启动数据服务
        db.json 快速的伪造数据
    - package.json 
        script
        "dev": "json-server -w db.json"

- restful api 
    restful api 是
        1. web 开发的规范  一切皆资源 2. url 设计规则
        
    json-server遵守这个规则
    展示的方式,就是restful api 要遵守的
    查
    GET http://localhost:3000/posts
    GET http://localhost:3000/posts/:id

    - 增删改查 CRUD
    增 POST http://localhost:3000/posts 向文章的集合添加一篇文章
    删 DELETE http://localhost:3000/posts/:id 删除文章
    改 PUT http://localhost:3000/posts/:id 更新文章 修改
    改 PATCH http://localhost:3000/posts/:id 更新文章 部分修改