<template lang="pug">
  div
    <TitleBar title="Brand" description="Use brand to display brand logos in your project." :tabs="pageTabs" />
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

import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import Examples from './examples/index.vue';
import { standardComponentPageTabs } from '@/constants/constants';

// Vue.config.ignoredElements = ['chi-link', 'chi-brand'];

@NuxtComponent({
  components: {
    Accessibility,
    Properties,
    Examples,
  },
})
export default class Brand extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
