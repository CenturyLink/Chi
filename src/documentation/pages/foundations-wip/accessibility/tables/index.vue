<template lang="pug">
  div
    <TitleBar title="Tables" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Tables'
    }
  },
  components: {
    Examples
  }
})
export default class Tables extends Vue {}
</script>
