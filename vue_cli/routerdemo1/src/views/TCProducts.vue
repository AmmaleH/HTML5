<template>
  <div>{{ id }} 家电</div>
</template>

<script>
export default {
  name: "TCProducts.vue",
  data: function () {
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