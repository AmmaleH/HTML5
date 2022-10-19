<template>
  <div id="app">
    <div>
      <span><router-link to="/Home">首页</router-link></span>
      <span><router-link to="/Products">商品列表</router-link></span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>

<style>
</style>
