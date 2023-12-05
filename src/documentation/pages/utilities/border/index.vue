<template lang="pug">
  div
    <TitleBar title="Border" description="Use shorthand border utility classes to control border, border width and border color on elements." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Border'
    }
  },
  components: {
    Examples
  }
})
export default class Border extends Vue {}
</script>
