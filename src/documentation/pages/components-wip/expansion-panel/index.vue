<template lang="pug">
  div
    <TitleBar title="Expansion Panel" description="Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      #examples.chi-tabs-panel.-active
        <Examples />
      #properties.chi-tabs-panel
        <Properties />
      #accessibility.chi-tabs-panel
        <Accessibility />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '../../../constants/constants';

Vue.config.ignoredElements = ['chi-alert', 'chi-button', 'chi-brand'];

@Component({
  components: {
    Accessibility,
    Examples,
    PageContentTabs,
    Properties
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs
    };
  }
})
export default class ExpansionPanel extends Vue {}
</script>
