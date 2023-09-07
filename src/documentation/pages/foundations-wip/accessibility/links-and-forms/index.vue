<template lang="pug">
  div
    <TitleBar title="Links and forms" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Links and forms'
    }
  },
  components: {
    Examples
  }
})
export default class LinksForms extends Vue {}
</script>
