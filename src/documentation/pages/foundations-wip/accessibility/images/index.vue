<template lang="pug">
  div
    <TitleBar title="Images" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Images'
    }
  },
  components: {
    Examples
  }
})
export default class Images extends Vue {}
</script>
