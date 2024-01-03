# 模块化

- window:遵照 ECMAscript 标准, export || export default 抛出, import 引入
- node:遵照 CommonJS 规范, module.exports || exports 抛出, require 引入
  node 可以兼容 ECMAscript 标准, 需要在 package.json 中定义"type": "module"
# 内置模块
1. 全局对象 global _filename _dirname porcess