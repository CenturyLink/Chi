<template lang="pug">
  div
    <TitleBar title="Card" description="A collection of templates built with responsive Cards." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Card'
    }
  },
  components: {
    Examples
  },
  layout() {
    return 'wide';
  }
})
export default class Card extends Vue {}
</script>
