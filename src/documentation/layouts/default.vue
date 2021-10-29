<template lang="pug">
  #docs-container.docs-container
    <Header />
    main.docs-body.-non-doc
      nav.docs-sidenav
        <Navigation />
      .docs-article
        <Nuxt />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Default extends Vue {
  mounted() {
    document.body.classList.add('chi');
  }
}
</script>
