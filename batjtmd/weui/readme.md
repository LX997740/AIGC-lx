# 企业级界面开发规则

- html css js 功能分离
- css 架构
    - reset.css 重置样式
        去除浏览器之间的样式区别 ，无差别页面显示
        box-sizing 盒子大小的计算方式
        文档流  body开始
        盒子在页面上占了多少
            2种盒模型
                标准盒子模型 = content + padding + border + margin
                IE盒子模型 = content(自动缩放)+ padding + border + margin
    - base.css 通用样式

- css命名套路
    - page  btn  panel cell
        __hd  __bd  __ft
    - 框架组件
- css + 兄弟选择器
- google 图片格式
    base64图片 小一点简单的 在css文件里
    jpg|png|jpeg|wtt|webp  比较大 单独的文件 可能会带来请求的并发