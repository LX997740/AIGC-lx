# 百度编程能力

- 文章
    aigc
    热榜 - > 别人的文章->找到主题
    费曼学习法 教别人学习是最好的学习
    再深入的主题 都要讲到尽可能小白能听懂
- 计算机网络
    - openAI 网络请求 怎么搞?
        - openai 请求过程的图形化介绍(postman)
        - postman  HTTP请求制造工具
    模拟 
    openai.Completion.create() 代码层 运行所在?  本地调试+项目服务器运行
    运行 物理层
    LLM openai 的服务器集群里
    协议层 HTTPS互联网超文本协议 IP  WEB的基础 openai 封装了http请求库
    层次不一样

    HTTP  状态码 status Code
    1xx 请求进行中  
    2xx 成功
    3xx 跳转,重定向
    4xx 客户端错误
        400 Bad Request
        401 未授权 UnAuthorized 

    5xx 服务器错误

    - HTTP 基于请求响应的简单协议
        - 请求行 POST+url 短小
        - 头部   Key-val 
            Authorization = api-key
        - 请求体 
    
    - model davinci 请求者