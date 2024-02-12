<template lang="pug">
  div
    <TitleBar title="Drawer" description="Drawers are flexible containers anchored to the top, right, bottom, or left of the screen. They are used primarily in Chi for displaying menus on small devices." :tabs="pageTabs" />
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
export default class Drawer extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
