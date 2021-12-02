<template lang="pug">
div
  <TitleBar title="Alert" description="Alert messages provide contextual feedback for user actions." :tabs="pageTabs" />
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
export default class Alert extends Vue {}
</script>
