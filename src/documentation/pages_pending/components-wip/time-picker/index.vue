<template lang="pug">
  div
    <TitleBar title="Time picker" description="Time picker allows users to enter a time through text input or choose a time from a picker." :tabs="pageTabs" />
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

Vue.config.ignoredElements = ['chi-time-picker', 'chi-time', 'chi-label', 'chi-brand'];

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class Steps extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
