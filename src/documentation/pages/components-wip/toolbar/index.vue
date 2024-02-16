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
import { Vue } from 'vue-facing-decorator';
import Examples from './_examples/index.vue';

import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '@/constants/constants';

@NuxtComponent({
  components: {
    Examples,
    Accessibility,
    Properties,
  },

  layout() {
    return 'wide';
  },
})
export default class Tooltip extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
