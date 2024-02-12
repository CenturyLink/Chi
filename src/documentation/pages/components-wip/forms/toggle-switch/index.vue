<template lang="pug">
  div
    <TitleBar title="Toggle switch" description="Toggle switches are used to switch between two possible states." :tabs="pageTabs" />
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
import PageContentTabs from '../../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '@/constants/constants';

Vue.config.ignoredElements = ['chi-switch', 'chi-brand'];

@NuxtComponent({
  components: {
    Examples,
    Accessibility,
    Properties,
  },
})
export default class ToggleSwitch extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
