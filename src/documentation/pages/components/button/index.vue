<template lang="pug">
  div
    <TitleBar title="Button" description="Buttons are used to trigger actions in forms, modals, and more." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      .chi-tabs-panel.-active#examples
        <Builder />
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
import Builder from './_builder.vue';
import { standardComponentPageTabs } from '@/constants/constants';

definePageMeta({
  layout: 'wide',
});

@NuxtComponent({
  components: {
    Examples,
    Accessibility,
    Properties,
    Builder,
  },
})
export default class Button extends Vue {
  pageTabs = standardComponentPageTabs;
}
</script>
