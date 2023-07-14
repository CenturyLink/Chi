<template lang="pug">
  div
    <TitleBar title="Using the keyboard" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi -- Using the keyboard'
    }
  },
  components: {
    Examples
  }
})
export default class Keyboard extends Vue {}
</script>
