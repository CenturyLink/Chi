<template lang="pug">
  div
    <TitleBar title="Text input" description="Text inputs are used for inputting single line text data." :tabs="pageTabs" />
    .chi-grid__container.-pt--3
      .chi-tabs-panel.-active#examples
        <Examples />
      .chi-tabs-panel#properties
        <Properties />
      .chi-tabs-panel#accessibility
        <Accessibility />
      .chi-tabs-panel#builder
        <Builder />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';
import PageContentTabs from '../../../../components/PageContentTabs.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import Builder from './_builder.vue';
import { standardComponentPageTabs } from '@/constants/constants';

definePageMeta({
  layout: 'wide',
});

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
    Builder,
  },
})
export default class TextInput extends Vue {
  pageTabs = [
    ...standardComponentPageTabs,
    {
      id: 'builder',
      label: 'Builder',
    },
  ];
}
</script>
