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
          {{ product.price * product.count }} &#8381;
        </span>
      </div>
      <Counter
        class="cart-product__counter"
        :count="product.count"
        @add="add(product)"
        @remove="remove(product)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Counter } from "@/common/components";

export default {
  name: "Product",
  components: {
    Counter,
  },
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
</style>
