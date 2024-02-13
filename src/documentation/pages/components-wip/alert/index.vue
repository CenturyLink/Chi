<template lang="pug">
<TitleBar title="Alert" description="Alert messages provide contextual feedback for user actions." :tabs="pageTabs" />
.chi-grid__container.-pt--3
  #examples.chi-tabs-panel.-active
    <Examples />
  #properties.chi-tabs-panel
    <Properties />
  #accessibility.chi-tabs-panel
    <Accessibility />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '@/constants/constants';

// Vue.config.ignoredElements = ['chi-alert', 'chi-button', 'chi-brand'];

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class Alert extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
