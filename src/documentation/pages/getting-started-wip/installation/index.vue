<template lang="pug">
  div
    <TitleBar title="Installation" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Installation'
    }
  },
  components: {
    Examples
  }
})
export default class Installation extends Vue {}
</script>
