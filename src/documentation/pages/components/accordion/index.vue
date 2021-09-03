<template lang="pug">
  div
    <TitleBar title="Accordion" description="Accordion is used to toggle between hiding and showing content." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      .chi-tabs-panel.-active#examples
        <Examples />
      .chi-tabs-panel#properties
        <Properties />
      .chi-tabs-panel#accessibility
        <Accessibility />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
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
    Properties,
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs,
    }
  },
})
export default class Accordion extends Vue {
  mounted() {
  }
}
</script>
