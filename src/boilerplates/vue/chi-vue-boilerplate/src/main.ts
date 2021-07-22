import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import(/* webpackChunkName: "chi-vue" */ '@centurylink/chi-vue').then(chiVue => {
  Object.keys(chiVue.library.components).forEach((name: string) => {
    Vue.component(name, chiVue.library.components[name]);
  });
}).finally(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}).catch(() => {
  throw('@centurylink/chi-vue library is not loaded correctly!');
});
