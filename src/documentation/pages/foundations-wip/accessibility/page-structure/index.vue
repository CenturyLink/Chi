<template lang="pug">
<TitleBar title="Page structure" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Page structure',
    };
  },
  components: {
    Examples,
  },
})
export default class PageStructure extends Vue {}
</script>
