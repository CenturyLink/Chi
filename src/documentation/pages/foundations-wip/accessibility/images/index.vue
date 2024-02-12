<template lang="pug">
<TitleBar title="Images" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Images',
    };
  },
  components: {
    Examples,
  },
})
export default class Images extends Vue {}
</script>
