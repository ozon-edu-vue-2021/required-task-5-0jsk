<template>
  <div class="panel">
    <Products />
    <div class="panel__controls controls">
      <h3 class="controls__title">Корзина</h3>
    </div>
  </div>
</template>

<script>
import { Products } from "@/modules/products/components";

export default {
  name: "Catalog",
  components: {
    Products,
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: space-between;

  width: 1000px;
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
</style>
