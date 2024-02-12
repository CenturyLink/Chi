<template lang="pug">
  div
    <TitleBar title="Text" description="Use text utility classes to control sizing, color, alignment and more." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Text',
    };
  },
  components: {
    Examples,
  },
})
export default class TextUtility extends Vue {}
</script>
