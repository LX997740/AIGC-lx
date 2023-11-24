# 企业级开发

- 代码的健壮性
    校验下参数
    进程的安全性
    单线程(简单 + event loop)  (太脆了)
    throw + try catch ()

- catch 自由变量 key 设置 
    1+12   11+2 '1,12'  '11,2'
    - 通过 arguments 伪数组 
        兼容性不太好
        [...arguments].join(',')
        Array.from(arguments).join(',') 
        兼容性好，但是不支持 IE8 及以下
        Array.prototype.join.call(arguments,',')//借给arguments用,this指向arguments

- fibonacci 爬楼梯
    - 递归的通用问题 ,不停的入栈
        自顶向下解决问题 带来了递归的不停的入栈
    - 记忆函数 备忘录
    
    - 自底向上解决问题 
        f(1) = 1 f(2)=1 f(3)=f(2)+f(1)
        f(n) = f(n-1)+f(n-2)

- 使用递归,快速基于自顶向下的思想来解决问题
    - 程序栈的问题  (爆栈)

- 可以先使用记忆函数 备忘录模式优化
    空间{ } key:value

- 都可以自底向上解决,每一步都有一个公式 f(n) = f(n-1)+f(n-2)
    动态规划 dp