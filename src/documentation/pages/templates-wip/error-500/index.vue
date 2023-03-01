<template lang="pug">
  div
    <TitleBar title="Error 500" description="Basic 500 level error page template. Indicates a server side error, so no dynamic information is presented." :tabs="[]" />
    .chi-grid__container.-pt--3
      <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageContentTabs from '../../../components/PageContentTabs.vue';
import Examples from './examples/index.vue';

@Component({
  components: {
    PageContentTabs,
    Examples
  },
})
export default class Error500 extends Vue {}
</script>
