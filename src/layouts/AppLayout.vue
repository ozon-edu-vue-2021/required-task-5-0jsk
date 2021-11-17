<template>
  <div class="center">
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped>
.center {
  display: grid;
  place-items: center;
}
</style>
