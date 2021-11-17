<template>
  <div class="list">
    <Product
      class="list__item"
      v-for="product of products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Products",
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;

  flex-grow: 1;
  justify-content: space-between;
  align-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
}

.list__item {
  width: calc(25% - 16px);
  margin-bottom: 12px;
}
</style>
