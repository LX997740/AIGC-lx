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