<template>
  <div class="panel">
    <div class="list">
      <Product
        class="list__item"
        v-for="product of products"
        :product="product"
        :key="product.id"
      />
    </div>
    <div class="controls"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Product from "@/modules/products/components/Product";

export default {
  name: "Products",
  components: {
    Product,
  },
  computed: {
    ...mapState("Products", ["products"]),
    ...mapGetters("Products", ["favourites"]),
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: space-between;

  width: 1000px;
}

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
