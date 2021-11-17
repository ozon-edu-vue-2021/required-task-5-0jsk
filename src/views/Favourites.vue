<template>
  <div class="panel">
    <h2>Избранное</h2>
    <Products class="panel__list" :products="favourites" />
  </div>
</template>

<script>
import { Products } from "@/modules/products/components";
import { mapGetters } from "vuex";

export default {
  name: "Favourites",
  components: {
    Products,
  },
  computed: {
    ...mapGetters("Products", ["favourites"]),
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel__list {
  margin-top: 8px;
  width: 800px;
}
</style>
