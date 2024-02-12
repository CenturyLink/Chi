<template lang="pug">
  div
    <TitleBar title="Progress" description="Use progress to display the status of a task or process." :tabs="pageTabs" />
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

Vue.config.ignoredElements = ['chi-progress', 'chi-brand'];

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class Progress extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
