<template lang="pug">
  div
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
import { Component, Vue } from 'vue-property-decorator';
import { standardComponentPageTabs } from '~/constants/constants';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Examples from './examples/index.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';

@Component({
  components: {
    PageContentTabs,
    Examples,
    Properties,
    Accessibility
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs
    };
  },
  layout() {
    return 'wide';
  }
})
export default class AppLayout extends Vue {}
</script>
