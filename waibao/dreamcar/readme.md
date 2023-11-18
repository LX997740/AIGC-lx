# 小程序业务架构

- App和Page的概念
    App  全局 ,是Pages共享的
    App.js共享globalData
    App.wxss样式的共享
    App.JSON 应用的配置

- globalData 如何来到page中的
    - const app = getApp()  page.js中
        全局的对象
    - data 初始化占位
        {
            data:{
                user:{}//空的
            }
        }
    - 利用生命周期
        数据来自于后端接口中
        onLoad  wxml+wxss显示了
        这是请求数据的最佳时期
    - this.setData({
        user:真正的值
    })
    - 页面会热更新 重新绘制{{}}这部分

- 循环输出的概念
    - 模板在{{直出}}外,数组列表输出的常态
    - block 只承载循环指令  wx:for
        不会出现在文档流中
        - item 默认
            item.image

- css 架构思路
Dry原则 Don't repeat yourself !
css 业务拆分 一个元素多个类名
section hero white
    - app.wxss 全局样式
        - 公用的样式
        - 模块化
    - page.wxss 页面业务样式