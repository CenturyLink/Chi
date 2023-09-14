<template lang="pug">
  div
    <TitleBar title="Other" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Other'
    }
  },
  components: {
    Examples
  }
})
export default class LinksForms extends Vue {}
</script>
