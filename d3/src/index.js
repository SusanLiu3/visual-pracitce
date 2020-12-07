import Vue from 'vue';
import App from './app.vue';
import * as d3 from 'd3';
Vue.prototype.d3 = d3;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
