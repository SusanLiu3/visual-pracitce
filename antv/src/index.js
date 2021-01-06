import Vue from 'vue';
import App from './app.vue';
import { Chart } from '@antv/g2';
Vue.prototype.Chart = Chart;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
