<template lang="pug">
<TitleBar title="Overview" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Overview',
    };
  },
  components: {
    Examples,
  },
})
export default class Overview extends Vue {}
</script>
