<template lang="pug">
  div
    <TitleBar title="Browser support" />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Browser support'
    }
  },
  components: {
    Examples
  }
})
export default class BrowsersDevices extends Vue {}
</script>
