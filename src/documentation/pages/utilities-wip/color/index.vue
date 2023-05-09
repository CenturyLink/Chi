<template lang="pug">
  div
    <TitleBar title="Color" description="Use shorthand color utility classes to quickly apply or remove colors." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Color'
    }
  },
  components: {
    Examples
  }
})
export default class Border extends Vue {}
</script>
