<template lang="pug">
  div
    <TitleBar title="Tabs" description="Tabs are used to navigate between views within the same context." :tabs="pageTabs" />
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
import { standardComponentPageTabs } from '~/constants/constants';

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})

export default class Tabs extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
