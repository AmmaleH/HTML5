<template>
  <div id="app">
    <myHead> </myHead>
    <myContent> </myContent>
    <myBottom> </myBottom>
    <other> </other>
  </div>
</template>

<script>
// 本地注册
import other from './components/other.vue';

export default {
  name: 'app',
  data () {
    return {
      title: '',
    }
  },
  components: {
    other,
  }
}
</script>

<style lang="scss">

</style>
