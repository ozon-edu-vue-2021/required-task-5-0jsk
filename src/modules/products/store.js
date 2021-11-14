const state = {
  products: [],
};

const mutations = {
  set(state, { products }) {
    state.products = products;
  },
  favourite(state, { id }) {
    const index = state.products.findIndex((product) => product.id === id);

    if (~index) {
      const product = state.products[index];

      state.products.splice(index, 1, { ...product, favourite: true });
    }
  },
};

const actions = {
  async query({ commit }, { count = 30 }) {
    const products = await this.$api.products.query(count);

    commit("set", { products });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
