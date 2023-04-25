<template lang="pug">
div
  <TitleBar title="Display" description="Use shorthand display utility classes to quickly change an element's display value." />

  section.chi-grid__container.-pt--3
    <Notation />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Examples from './examples/examples.vue';
import Notation from './examples/notation.vue';

@Component({
  components: {
    Notation,
    Examples
  }
})
export default class Display extends Vue {}
</script>
