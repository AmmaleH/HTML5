<template>
  <div>
    <h3>减法--> {{ count }}</h3>
    <button @click="subtraction()">-1</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: 0,
    };
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    subtraction() {
      this.msg--;
    },
    ...mapMutations(["sub", "subN"]),
    handle1() {
      this.sub();
    },
    handle2() {
      this.subN(3);
    },
    ...mapActions(["subAsync"]),
    handle3() {
      this.subAsyns();
    },
  },
};
</script>