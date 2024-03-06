<template lang="pug">
<TitleBar title="Badge" description="Badges are inline elements used to label, categorize, or organize a list of items." :tabs="pageTabs" />
.chi-grid__container.-pt--3
  client-only
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
import { standardComponentPageTabs } from '@/constants/constants';

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class Badge extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
