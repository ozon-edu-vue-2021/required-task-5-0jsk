const state = {
  cart: [],
};

const mutations = {
  add(state, product) {
    const index = state.cart.findIndex((p) => p.id === product.id);

    if (~index) {
      state.cart[index].count += 1;
      return;
    }

    state.cart = [...state.cart, { ...product, count: 1 }];
  },
  delete(state, product) {
    const index = state.cart.findIndex((p) => p.id === product.id);

    if (~index) {
      state.cart[index].count -= 1;
    }

    state.cart = state.cart.filter(({ count }) => count > 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
