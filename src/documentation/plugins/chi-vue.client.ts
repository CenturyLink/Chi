/**
 * Import all chi-vue components
 */
import * as ChiVueLibrary from '@centurylink/chi-vue';

import { ChiVue } from '@centurylink/chi-vue';

export default defineNuxtPlugin(nuxtApp => {
  Object.entries(ChiVueLibrary).forEach(([name, component]) => {
    if (name === "ChiVue" || name === 'registerChiJs'){
      return
    }
    const newName = name.replace("Chi", "ChiVue")
    nuxtApp.vueApp.component(
        newName,
        component
    )
  })
  // nuxtApp.vueApp.use(ChiVue, {});
})
