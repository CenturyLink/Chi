<template lang="pug">
  div
    <TitleBar title="Toolbar" description="Toolbar provides the ability of performing actions such as searching for elements and filtering complex structures." :tabs="pageTabs" />
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
import Examples from './_examples/index.vue';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '../../../constants/constants';

Vue.config.ignoredElements = [
  'chi-textarea',
  'chi-brand',
  'chi-text-input',
  'chi-label',
  'chi-date-picker'
];

@Component({
  components: {
    Examples,
    Accessibility,
    PageContentTabs,
    Properties
  },
  data: () => {
    return {
      pageTabs: standardComponentPageTabs
    };
  }
})
export default class Tooltip extends Vue {}
</script>
