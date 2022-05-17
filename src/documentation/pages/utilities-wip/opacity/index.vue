<template lang="pug">
  div
    TitleBar(title="Opacity" description="Use to change the opacity of an element.")
    .chi-grid__container.-pt--3
      Examples
      Responsive
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';
import Responsive from './responsive/index.vue';

@Component({
  components: {
    Examples,
    Responsive
  }
})
export default class Opacity extends Vue {}
</script>
