/**
 * Defines urls to be used in the application. Modifies the configuration
 */

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const docsStore = useDocsJson();

  $fetch(config.public.docsJsonUrl).then(data => {
    docsStore.value = data;
  })
});
