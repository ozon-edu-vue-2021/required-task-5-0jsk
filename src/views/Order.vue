<template>
  <div class="order">
    <h2 class="order__title">Корзина</h2>
    <template v-if="cart.length > 0">
      <div class="list order__list">
        <ul>
          <li class="order__item" v-for="product in cart" :key="product.id">
            <Product :product="product" />
          </li>
        </ul>
        <button class="order__buy-btn" type="button" @click="checkout">
          Оформить (Всего: {{ totalPrice }} &#8381;)
        </button>
      </div>
    </template>
    <h2 v-else class="order__title">Здесь пусто :(</h2>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { Product } from "@/modules/cart/components";

export default {
  name: "Order",
  components: {
    Product,
  },
  computed: {
    ...mapState("Cart", ["cart"]),
    ...mapGetters("Cart", ["totalPrice"]),
  },
  methods: {
    ...mapMutations("Cart", ["clear"]),
    checkout() {
      const beautifulCart = this.cart.map(({ title, price, count }) => ({
        title,
        totalPrice: count * price,
        count,
      }));

      alert(JSON.stringify(beautifulCart, null, 2));

      this.clear();
    },
  },
};
</script>

<style scoped>
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order__title {
  font-size: 24px;
  margin-bottom: 32px;
}

.order__item {
  list-style-type: none;
  margin-bottom: 12px;
}

.order__buy-btn {
  padding: 6px;

  width: 100%;
  height: 42px;

  background-color: forestgreen;
  border: none;
  cursor: pointer;
  color: white;

  font-size: 18px;
  font-weight: bold;

  border-radius: 4px;
}
</style>
