<template lang="pug">
  div
    <TitleBar title="Opacity" description="Use to change the opacity of an element." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Opacity',
    };
  },
  components: {
    Examples,
  },
})
export default class Opacity extends Vue {}
</script>
