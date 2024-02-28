<template lang="pug">
<TitleBar title="Data table" description="Data tables are used to present data sets in a simple and organized way. Unlike standard HTML Table, it is responsive and compatible with all the screen sizes." :tabs="pageTabs" />
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

definePageMeta({
  layout: 'wide',
});

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class DataTable extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
