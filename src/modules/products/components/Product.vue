<template>
  <div class="item">
    <img class="item__image" :src="product.image" :alt="product.title" />
    <span class="item__title">{{ product.title }}</span>
    <div class="item__controls">
      <span class="item__price">{{ product.price }} &thinsp;₽</span>
      <button
        type="button"
        class="item__btn-add"
        @click="$emit('add', product)"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
      validator: (o) => Boolean(o.id),
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
}

.item__image {
  width: 100%;
  height: auto;
}

.item__title {
  font-size: 18px;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  margin-top: 4px;
}

.item__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4px;
}

.item__btn-add {
  padding: 8px;
  background-color: darkseagreen;
  border-radius: 4px;

  cursor: pointer;
  border: unset;
}

.item__price {
  font-size: 18px;
  font-weight: bold;
}
</style>
