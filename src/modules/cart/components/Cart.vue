<template>
  <ul class="cart">
    <li class="cart__item" v-for="product in cart" :key="product.id">
      <span>
        {{ product.name }}
      </span>
    </li>
  </ul>
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

</style>
