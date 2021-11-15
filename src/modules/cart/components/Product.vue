<template>
  <div class="cart-product">
    <img
      class="cart-product__image"
      :src="product.image"
      :alt="product.title"
    />
    <div class="cart-product__description">
      <div class="product-description">
        <span class="product-description__title">{{ product.title }}</span>
        <span class="product-description__price"
          >{{ product.price }} &#215; {{ product.count }} =
          {{ product.price * product.count }} &#8381;</span
        >
      </div>
      <div class="cart-product__counter counter">
        <button
          class="counter__control-btn counter__control-btn--remove"
          type="button"
          @click="remove(product)"
        >
          -
        </button>
        <div class="counter__count">{{ product.count }}</div>
        <button
          type="button"
          class="counter__control-btn counter__control-btn--add"
          @click="add(product)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
      validator: (o) => Boolean(o.id),
    },
  },
  methods: {
    ...mapMutations("Cart", ["add", "remove"]),
  },
};
</script>

<style scoped>
.cart-product {
  display: flex;
}

.cart-product__image {
  height: 108px;
  width: 108px;
}

.cart-product__description {
  margin-left: 8px;
}

.product-description {
  display: flex;
  flex-direction: column;
}

.product-description__title {
  font-size: 16px;
  font-weight: bold;
}

.product-description__price {
  overflow-wrap: normal;
}

.cart-product__counter {
  margin-top: 8px;
}

.counter {
  display: flex;
  align-items: center;
}

.counter__control-btn {
  font-size: 14px;
  padding: 2px 6px;

  border-radius: 4px;
  border: none;

  cursor: pointer;
}

.counter__control-btn--add {
  background-color: lightgreen;
}

.counter__control-btn--remove {
}

.counter__count {
  margin: 0 6px;
}
</style>
