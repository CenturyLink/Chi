<template lang="pug">
  div
    <TitleBar title="Image" description="Use to change the responsive behavior of an image element." />
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Image',
    };
  },
  components: {
    Examples,
  },
})
export default class ImageUtility extends Vue {}
</script>
