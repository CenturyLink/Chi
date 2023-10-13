<template lang="pug">
  div
    <TitleBar title="Text" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Text'
    }
  },
  components: {
    Examples
  }
})
export default class Text extends Vue {}
</script>
