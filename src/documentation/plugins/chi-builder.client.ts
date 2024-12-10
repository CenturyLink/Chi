import { ChiBuilder } from '@centurylink/chi-builder';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ChiBuilder', ChiBuilder);
});
