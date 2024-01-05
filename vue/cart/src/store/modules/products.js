import shop from "../../api/shop";

//单纯的想数据
const state = {
  all: [],
};

//规则 同步的
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
};
//业务
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit("setProducts", products);
    });
  },
};
const getters = {};

// store.products.state
export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  getters,
};
