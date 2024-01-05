const state = {
  // 购物车
  items: [],
};
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },
};
const actions = {
  addProductToCart({ commit, state }, product) {
    if (product.inventory > 0) {
      //找到购物车中是否有该商品
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
    }
  },
};
const getters = {};
// store.cart.state
export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  getters,
};
