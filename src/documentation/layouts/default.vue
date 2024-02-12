<template lang="pug">
.docs-container#docs-container
  component(is="script" v-html="redirectionScript")
  <Header />
  main.docs-body.-non-doc
    nav.docs-sidenav
      <Navigation />
    .docs-article
      <slot />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { redirectionScript } from '@/constants/scripts';

@NuxtComponent({})
export default class Default extends Vue {
  redirectionScript = redirectionScript;
}
</script>
