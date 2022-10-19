<template>
  <div>
    <h3>加法--> {{ this.$store.state.count }}</h3>
    <button @click="addition()">+1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 0,
    };
  },
  methods: {
    addition() {
      this.msg++;
    },
    handle() {
      this.$store.commit("add");
    },
    handleN() {
      this.$store.commit("addN", 3);
    },
    handle1() {
      this.$store.dispatch("addAsync");
    },
  },
  created() {
    console.log(this.$store.state);
  },
};
</script>
