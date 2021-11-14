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

const getters = {
  favourites: (state) => state.products.filter(({ favourite }) => favourite),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
