import App from './App.vue';
import { createApp } from 'vue';
import { ChiVue, ChiSearchInput } from '@centurylink/chi-vue';

const app = createApp(App);
app.component('ChiSearchInput', ChiSearchInput);
app.use(ChiVue, {}).mount('#app');
