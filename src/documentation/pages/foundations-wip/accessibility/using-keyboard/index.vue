<template lang="pug">
<TitleBar title="Using the keyboard" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Using the keyboard',
    };
  },
  components: {
    Examples,
  },
})
export default class Keyboard extends Vue {}
</script>
