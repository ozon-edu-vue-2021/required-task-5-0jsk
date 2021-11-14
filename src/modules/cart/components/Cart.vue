<template>
  <div class="cart">
    <ul class="cart__item-list">
      <li class="cart__item item" v-for="product in cart" :key="product.id">
        <span class="item__title">
          {{ product.title }}
        </span>
        <span>
          {{ product.count }}
        </span>
      </li>
    </ul>
    <button
      type="button"
      v-if="cart.length > 0"
      class="cart__btn-order btn-order"
    >
      Перейти в корзину
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState("Cart", ["cart"]),
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
}

.cart__item-list {
  width: 100%;
}

.cart__item {
  margin-top: 6px;
}

.item {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

.item__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 75%;
}

.cart__btn-order {
  margin-top: 8px;
}

.btn-order {
  padding: 8px;

  background-color: forestgreen;
  border-radius: 4px;
  border: unset;
  color: #fff;
  cursor: pointer;
}
</style>
