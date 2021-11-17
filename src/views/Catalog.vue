<template>
  <div class="panel">
    <div>
      <router-link class="panel__favourite" :to="{ name: 'Favourites' }">
        Избранное
      </router-link>
    </div>
    <Products class="panel__products" :products="products" />
    <div class="panel__controls controls">
      <h3 class="controls__title">Корзина</h3>
      <Cart class="panel__cart" />
    </div>
  </div>
</template>

<script>
import { Products } from "@/modules/products/components";
import { Cart } from "@/modules/cart/components";
import { mapState } from "vuex";

export default {
  name: "Catalog",
  components: {
    Products,
    Cart,
  },
  computed: {
    ...mapState("Products", ["products"]),
  },
};
</script>

<style scoped>
.panel {
  display: inline-flex;
  justify-content: space-between;
}
.panel__controls {
  max-width: 25%;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls__title {
  margin: 0 auto;
}

.panel__cart {
  width: 250px;
  margin-left: 16px;
}

.panel__products {
  width: 800px;
}

.panel__favourite {
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 16px;
}
</style>
