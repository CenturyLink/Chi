import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import ChiVue, { STORE_KEY } from '@/store';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    [STORE_KEY]: ChiVue,
  },
});

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app');
