# 手写封装AJAX 函数, 只考虑get  url 请求  思考同步变异步

- promise 
    - ajax是异步的,放到promise中?  (async await)
    1. Promise实例化 , 经历以下工作流
        - new 该做的 返回一个P 初始状态 state = 'pending'
        - constructor  执行executor
        都是同步的
        - executor 是异步任务的容器
            - executor 同步的
            - executor 中的 setTimeout/ajax 异步的 ->eventloop
            - resolve() 时 p.state = 'fulfilled'
            - reject() 时 p.state = 'rejected'

        - 流程怎么办?
          - then 微任务 执行的机会是在 p.state pending ->fulfilled
          - await 比then更简洁 更像同步代码 , resolve(data)  data 交给左边