import { createStore, createLogger } from "vuex";
import cart from "./modules/cart";
import products from "./modules/products";
//单一状态树
export default createStore({
  //分支
  modules: {
    cart,
    products,
  },
  plugins: [createLogger()],
});
