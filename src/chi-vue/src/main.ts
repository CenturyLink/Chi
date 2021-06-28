import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import ChiVue from '@/store';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    ChiVue,
  },
});

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app');
