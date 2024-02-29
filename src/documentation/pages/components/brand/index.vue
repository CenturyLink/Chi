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
import { Component, Vue } from 'vue-property-decorator';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import Examples from './examples/index.vue';
import { standardComponentPageTabs } from '../../../constants/constants';

Vue.config.ignoredElements = ['chi-link', 'chi-brand'];

@Component({
  components: {
    Accessibility,
    PageContentTabs,
    Properties,
    Examples
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs,
    }
  },
})
export default class Brand extends Vue {
  mounted() {
  }
}
</script>
