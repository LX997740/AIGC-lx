//shop?
//大型项目 index.js 是axios的入口 不负责接口输出
//每个模块的接口一个文件
//vuex 读|写 不能随意修改, 流程 actions(api)->mutations(回溯，记账一样)

//设计模式 难理解，复杂 被pinia取代

//以下划线开头，私有的 只在本模块内使用
const _products = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
];

export default {
  // 阅读后端接口文档,action要调用的方法
  getProducts(cb) {
    //模拟量ajax请求后端要花时间
    //callback
    setTimeout(() => cb(_products), 100);
  },
  buyProduct(products, cb, errorCb) {
    //模拟量ajax请求后端要花时间
    //callback
    setTimeout(() => {
      //抛硬币
      Math.random() > 0.5 ? cb() : errorCb();
    }, 100);
  },
};
