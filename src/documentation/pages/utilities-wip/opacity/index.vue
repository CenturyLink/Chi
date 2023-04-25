<template lang="pug">
fragment
  <TitleBar title="Opacity" description="Use to change the opacity of an element." />

  section.chi-grid__container.-pt--3
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  components: {
    Examples
  }
})
export default class Opacity extends Vue {}
</script>
