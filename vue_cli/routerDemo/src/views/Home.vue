<template>
  <div>
    首页111
    <div class="img_box">
      <img v-for="img in imgs" :key="img" :src="img" alt="" />
      <!-- <div class="img_box">
      <img src="../assets/gun1.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home.vue",
  data() {
    return {
      imgs: [
        "/dist/images/car1.jpg",
        "/dist/images/car2.jpg",
        "/dist/images/gun1.jpg",
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 100%;
  margin-left: 10px;
  display: inline-block;
}
</style>