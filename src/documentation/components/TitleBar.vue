<template lang="pug">
Title {{ title }}
header.docs-titlebar
  .chi-grid__container
    <h1 class="docs-titlebar__title">{{title}}</h1>
    .docs-titlebar__description(v-if="description") {{description}}
  <PageContentTabs v-if="tabs" :tabs="tabs" />
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-facing-decorator';
import { type ITabs } from '../models/models';

declare const chi: any;

@NuxtComponent({})
export default class BaseExample extends Vue {
  @Prop() title?: string;
  @Prop() description?: string;
  @Prop() tabs?: ITabs[];

  chiTabs: any;

  mounted() {
    const chiTabs = document.getElementById('page-content-tabs');
    if (chiTabs) {
      this.chiTabs =  chi.tab(chiTabs);
    }
  }

  beforeDestroy() {
    this.chiTabs?.dispose();
  }
}
</script>
