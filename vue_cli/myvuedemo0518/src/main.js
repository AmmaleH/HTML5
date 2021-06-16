import Vue from 'vue'
import App from './App.vue'
import head from './components/head.vue'
import content from './components/content.vue'
import bottom from './components/bottom.vue'

// 全局注册了三个组件
Vue.component('myHead', head);
Vue.component('myContent', content);
Vue.component('myBottom', bottom);

new Vue({
  el: '#app',
  render: h => h(App)
})
