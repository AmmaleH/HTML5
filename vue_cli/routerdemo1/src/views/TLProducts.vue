<template>
  <div>{{ id }} 玩具</div>
</template>

<script>
export default {
  name: "TLProducts.vue",
  data() {
    return {
      id: this.$route.params.id,
      products: [],
    };
  },
  created() {
    console.log(this.id);
  },
};
</script>

<style scoped>
</style>