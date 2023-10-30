<template lang="pug">
  div
    <TitleBar title="Design tokens" description="Design tokens are used in place of hard-coded values to maintain consistent and scalable design system development." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Design tokens'
    };
  },
  components: {
    Examples
  }
})
export default class DesignTokens extends Vue {}
</script>
