<template>
  <div>{{ id }} 手机</div>
</template>

<script>
export default {
  name: "PhoneProducts.vue",
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