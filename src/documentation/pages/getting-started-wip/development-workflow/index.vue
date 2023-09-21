<template lang="pug">
  div
    <TitleBar title="Development workflow" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Development workflow'
    }
  },
  components: {
    Examples
  }
})
export default class DevelopmentWorkflow extends Vue {}
</script>
