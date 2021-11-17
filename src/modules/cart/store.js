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
  remove(state, { id }) {
    const index = state.cart.findIndex((product) => product.id === id);

    if (~index) {
      state.cart[index].count -= 1;
    }

    state.cart = state.cart.filter(({ count }) => count > 0);
  },
  // eslint-disable-next-line no-unused-vars
  clear(state) {
    state.cart = [];
  },
};

const getters = {
  totalPrice(state) {
    return state.cart.reduce(
      (totalPrice, product) => totalPrice + product.price * product.count,
      0
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
