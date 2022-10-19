<template>
  <div id="app">
    <!-- <div>
      <span><router-link to="/Home">首页Home</router-link></span>
      <span><router-link to="/Products">商品Products</router-link></span>
    </div> -->

    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs">
          <li role="presentation">
            <router-link to="/Home">Home</router-link>
          </li>
          <li role="presentation">
            <router-link to="/PhoneProducts/1">手机</router-link>
          </li>
          <li role="presentation">
            <router-link to="/TCProducts/2">家电</router-link>
          </li>
          <li role="presentation">
            <router-link to="/TLProducts/3">玩具</router-link>
          </li>
        </ul>
      </div>

      <div class="row" id="rv">
        <router-view></router-view>
      </div>
    </div>
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
#rv {
  border: 1px solid red;
  margin-top: 20px;
  font-size: 20px;
}
</style>
