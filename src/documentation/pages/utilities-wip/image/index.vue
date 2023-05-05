<template lang="pug">
  div
    <TitleBar title="Image" description="Use to change the responsive behavior of an image element." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';
@Component({
  head() {
    return {
      title: 'Chi - Image'
    }
  },
  components: {
    Examples
  }
})
export default class Image extends Vue {}
</script>
