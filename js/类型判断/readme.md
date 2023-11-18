# typeof
准确的判断原始类型
- 变量转换为二进制 如果前面三个0则被认为引用类型,否则为原始类型
- null特例 判定为object
- 不能判定引用类型 function除外

# instanceof
只能判定引用类型,不能判定原始类型
- 通过原型链查找来判断的
- a instanceof b
    - 判断a的隐式模型是否等于b的显式原型 直到null

# Object.prototype.toString.call(xxx)  xxx  Object.prototype.toString()
1.If the this value is undefined, return "[object Undefined]".
2.If the this value is null, return "[object Null]".
3.将O作为 ToObject(this) 的执行结果
4.让class 成为 O 内部属性 [[Class]] 的值
5.返回由'[object'和 Class 和 ']'三部分组成的字符串