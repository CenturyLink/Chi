<template lang="pug">
<TitleBar title="Breadcrumb" description="Breadcrumbs are used to help users identify where they are in a sites page hierarchy." :tabs="pageTabs" />
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
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import Examples from './examples/index.vue';
import { standardComponentPageTabs } from '@/constants/constants';

@NuxtComponent({
  components: {
    Accessibility,
    Properties,
    Examples,
  }
})
export default class Breadcrumb extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
