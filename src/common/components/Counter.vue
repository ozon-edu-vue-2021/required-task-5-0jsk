<template>
  <div class="counter">
    <button
      class="counter__control-btn counter__control-btn--remove"
      type="button"
      @click="$emit('remove')"
    >
      -
    </button>
    <div class="counter__count">{{ count }}</div>
    <button
      type="button"
      class="counter__control-btn counter__control-btn--add"
      @click="$emit('add')"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
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
  background-color: palevioletred;
}

.counter__count {
  margin: 0 6px;
}
</style>
