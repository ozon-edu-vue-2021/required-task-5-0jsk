<template>
  <div class="item">
    <img class="item__image" :src="product.image" :alt="product.title" />
    <div class="item__info">
      <span class="item__title">{{ product.title }}</span>
      <component
        class="item__favourite"
        :class="{ 'item__favourite--is': product.favourite }"
        :is="heartImage"
        @click="product.favourite ? unfavourite(product) : favourite(product)"
      />
    </div>
    <div class="item__controls">
      <span class="item__price">{{ product.price }} &#8381;</span>
      <button type="button" class="item__btn-add" @click="handleClick">
        Добавить
      </button>
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
  data: () => ({
    heartImage: require("@/assets/icons/heart.svg"),
  }),
  methods: {
    ...mapMutations("Cart", ["add"]),
    ...mapMutations("Products", ["favourite", "unfavourite"]),
    handleClick() {
      this.add(this.product);
      this.$emit("add", this.product);
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

.item__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border: none;
}

.item__price {
  font-size: 18px;
  font-weight: bold;
}

.item__favourite {
  width: 20px;
  height: 20px;

  user-select: none;
  cursor: pointer;
}

.item__favourite--is {
  color: red;
}
</style>
