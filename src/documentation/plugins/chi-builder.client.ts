import { ChiBuilder } from '@centurylink/chi-builder/dist/components';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ChiBuilder', ChiBuilder);
});
