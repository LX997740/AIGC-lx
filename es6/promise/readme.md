# 2 promise 的理解和使用

## 2.1 Promise 是什么

### 理解？

1. 抽象表达：
   1. promise 是 ES6 的提出的新技术
   2. 是 JS 进行异步编程的新方案
2. 具体表达：
   1. 从语法上：Promise 是构造函数
   2. 从功能上：promise 对象用于封装一个异步操作，并且可以获取其成功/失败的结果

### 2.1.2 Promise 的状态改变

1. Promise 对象有三种状态：
   1. pending: 未完成态
   2. resolved/fulfilled: 已经完成态
   3. rejected: 已经失败态

一个 Promise 对象只能改变一次状态，无论是异步任务成功还是失败，状态只能从 pending 变为 resolved 或者 rejected。

## 2.2 为什么要用 Promise

### 2.2.1 指定回调函数的方式更灵活

1. 旧的 必须在启动异步任务前指定
2. promise 启动异步任务 => 返回 promise 对象 => 给 promise 对象指定回调函数(甚至可以在异步任务结束后指定/多个)

### 2.2.2 支持链式调用 可以解决回调地狱

1. 什么是回调地狱?
   回调函数嵌套使用，外部回调函数异步执行的结果是内部回调函数执行的条件
2. 回调函数的缺点
   不便于阅读
   不便于异常处理
3. 解决方案
   Promise 的链式调用

## 2.3 如何使用 Promise

### 2.3.1 API

1. Promise.resolve()
2. Promise.reject()
3. Promise.all()
4. Promise.race()

### 2.3.2 Promise 的几个关键问题

1. 如何改变 Promise 对象的状态？
   1. resolve() 如果当前状态是 pending，那么改变状态为 fulfilled
   2. reject() 如果当前状态是 pending，那么改变状态为 rejected
   3. 抛出异常，如果当前状态是 pending，那么改变状态为 rejected
2. 一个 Promise 指定多个成功/失败回调函数，都会被调用吗？
   当前 Promise 对象的状态改变，会调用指定的回调函数，如果指定多个，会依次调用
3. 改变 Promise 的状态和指定回调函数 谁先执行？
   1. 都有可能，正常情况下，先指定回调函数，后改变状态， 但也可以改变状态后指定回调函数
   2. 如何先改变状态后指定回调函数？
      1. 执行器直接调用 resolve/reject() 方法
      2. 延迟更长时间才调用 then() 方法
   3. 什么时候得到数据
      1. 先指定回调函数，那么状态改变后，会立刻调用回调函数，得到数据
      2. 先改变状态，那当指定回调函数时，会立刻调用回调函数，得到数据
