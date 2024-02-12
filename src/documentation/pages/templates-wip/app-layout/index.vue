<template lang="pug">
<TitleBar title="App layout" description="A collection of application layout page templates built with Page Title, Buttons, Page-level actions and Footer." :tabs="pageTabs" />
  .chi-grid__container.-pt--3
    .chi-tabs-panel.-active#examples
      <Examples />
    .chi-tabs-panel#properties
      <Properties />
    .chi-tabs-panel#accessibility
      <Accessibility />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

import Examples from './examples/index.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';

@NuxtComponent({
  components: {
    Examples,
    Properties,
    Accessibility,
  },

  layout() {
    return 'wide';
  },
})
export default class AppLayout extends Vue {}
</script>
