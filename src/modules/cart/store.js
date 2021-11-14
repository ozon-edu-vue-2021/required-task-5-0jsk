const state = {
  cart: [],
};

const mutations = {
  add(state, product) {
    const index = state.findIndex((p) => p.id === product.id);

    if (~index) {
      state[index].count += 1;
    }

    state = [...state, { product, count: 1 }];
  },
  delete(state, product) {
    const index = state.findIndex((p) => p.id === product.id);

    if (~index) {
      state[index].count -= 1;
    }

    state = state.filter(({ count }) => count > 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
