<template lang="pug">
<TitleBar title="Number input" description="Number inputs are used to increase or decrease numeric values." :tabs="pageTabs" />
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

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class NumberInput extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
