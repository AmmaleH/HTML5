<template>
  <div id="app">
    <my-addition></my-addition>
    <hr />
    <p>------------------</p>
    <hr />
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import myAddition from "./components/myAddition.vue";
import mySubtraction from "./components/mySubtraction.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "my-addition": myAddition,
    "my-subtraction": mySubtraction,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
