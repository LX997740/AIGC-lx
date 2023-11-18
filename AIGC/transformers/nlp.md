# 机器学习任务
    transformers 属于huggingface的核心库
- pipeline 分发任务
    pipeline(task,model)
-  数组和hashTable|Dict
    - 相同点
        数据容器 线性
    - 区别
        数组,dict O(1)时间复杂度 和栈 队列 链表    内存空间连续和不连续
        非线性 树 图

- transformers 支持哪些npl任务
    SUPPORTED_TASKS  常量 返回一个对象
    items 值是一个dict PYthon
                 JSON JS
    for k,v in    for计数循环
- 读/写 操作系统 I/O操作 Input到内存  Output到硬盘
    同步代码 I/O 远程别的电脑->内存|硬盘    网络传输的耗时
    for()  毫秒结束 多进程切换 轮循     
    - 阻塞
- 人生苦短,我用python
    - requests 网络请求
        requests.get(url,  stream = True).raw  
        - http请求的方法 
            - get表示明文请求
            - post 提交表单
        - PIL库 提供图片读写等....
            - Image  r读
            - ImageDraw   w写
        - object-detection
书
图解 HTTP协议
计算机组成原理
