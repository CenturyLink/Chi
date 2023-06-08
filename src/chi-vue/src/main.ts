import { configureCompat } from '@vue/compat';
import { createApp } from 'vue';
import ChiVue from '@/store';
import App from './App.vue';
import Vuex from 'vuex';

configureCompat({
  MODE: 3,
});

const app = createApp(App);

const store = new Vuex.Store({
  state: {},
  modules: {
    ChiVue,
  },
});

app.use(store).mount('#app');
