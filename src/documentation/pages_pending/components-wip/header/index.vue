<template lang="pug">
  div
    <TitleBar title="Header" description="Headers are used to render consistent Lumen branded headers." :tabs="pageTabs" />
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
    Examples,
    Accessibility,
    Properties,
  },
})
export default class Header extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
