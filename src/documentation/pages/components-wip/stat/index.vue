<template lang="pug">
  div
    <TitleBar title="Stat" description="Stats are used to prominently display text or number values." :tabs="pageTabs" />
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
import { standardComponentPageTabs } from '@/constants/constants';

Vue.config.ignoredElements = ['chi-brand', 'chi-popover'];

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class Stat extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
