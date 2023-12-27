<template lang="pug">
  div
    <TitleBar title="Shadow" description="Use shadow utility classes to assist in creating a visual hierarchy." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Shadow'
    };
  },
  components: {
    Examples
  }
})
export default class Shadow extends Vue {}
</script>
