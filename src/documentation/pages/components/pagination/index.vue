<template lang="pug">
  div
    <TitleBar title="Pagination" description="Use pagination to separate long sets of data so that it is easier for a user to consume information." :tabs="pageTabs" />
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
export default class Pagination extends Vue {}
</script>
