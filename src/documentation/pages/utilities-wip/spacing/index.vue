<template lang="pug">
  div
    <TitleBar title="Spacing" description="Use shorthand margin and padding utility classes to control spacing between elements." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Spacing'
    }
  },
  components: {
    Examples
  }
})
export default class Spacing extends Vue {}
</script>
