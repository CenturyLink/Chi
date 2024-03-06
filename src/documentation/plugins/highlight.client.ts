/**
 * PLUGIN TO USE HIGHTLIGHTED CODE IN THE APPLICATION
 * Can only be used in client side
 * https://stackoverflow.com/questions/77007969/how-to-create-highlightjs-plugin-on-nuxt3
 */
import 'highlight.js/styles/github.css';
import hljsVuePlugin from '@highlightjs/vue-plugin';

// uncomment to enable language importing and colouring
// import 'highlight.js/lib/common';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(hljsVuePlugin);
});
