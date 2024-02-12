<template lang="pug">
  div
    <TitleBar title="Expansion panel" description="Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      #examples.chi-tabs-panel.-active
        <Examples />
      #properties.chi-tabs-panel
        <Properties />
      #accessibility.chi-tabs-panel
        <Accessibility />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '@/constants/constants';

Vue.config.ignoredElements = ['chi-alert', 'chi-button', 'chi-brand'];

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Expansion panel',
    };
  },
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class ExpansionPanel extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
