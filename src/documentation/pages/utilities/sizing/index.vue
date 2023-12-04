<template lang="pug">
  div
    <TitleBar title="Sizing" description="Use responsive sizing utility classes to quickly apply widths and heights on elements." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Sizing'
    }
  },
  components: {
    Examples
  }
})
export default class Sizing extends Vue {}
</script>
