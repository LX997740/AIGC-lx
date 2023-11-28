# if 条件语句

# switch 语句

# for 循环语句

# while 循环语句

# do while

# 数据类型

# 数组
```js
    var a = 'hello'  //字符串 string
    var b = 123 //数字 number
    var c = true // false 布尔类型 boolean
    var d = undefined
    var e = null
```
# 对象
```js
    var obj = {//对象 object
        name:'xx',
        age: 88
    }
    obj.name
    obj.ss=="ss"//往对象直接加值
```
    对象中没用相同的key:value 如果相同会被覆盖

# 栈   
    先进后出
    避免重复的操作

    let stack = []  只能用数组的push和pop方法
- 入栈
```js
    stack.push('水饺')
    stack.push('可爱多')
    stack.push('小布丁')
```
- 出栈
```js
    while(stack.lenght>0){
        const top = stack[stack.length-1]
        console.log('我正在吃',top)
        stack.pop()
    }
```