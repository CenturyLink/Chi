<template lang="pug">
  div
    <TitleBar title="Text" description="Use text utility classes to control sizing, color, alignment and more." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Text'
    };
  },
  components: {
    Examples
  }
})
export default class TextUtility extends Vue {}
</script>
