<template lang="pug">
  #docs-container.docs-container
    <script v-html="redirectionScript"></script>
    <Header />
    main.docs-body.-non-doc
      nav.docs-sidenav
        <Navigation />
      .docs-article
        <Nuxt />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CHI_VERSION } from '../constants/configs';

@Component({
  data: () => {
    return {
      CHI_VERSION,
      redirectionScript: `
        const pageURL = window.location.href;

        if (pageURL.includes('latest')) {
            const redirectionURL = pageURL.split('latest').join('${CHI_VERSION}');

            window.location.href = redirectionURL;
        }
      `
    }
  }
})
export default class Default extends Vue {}
</script>
