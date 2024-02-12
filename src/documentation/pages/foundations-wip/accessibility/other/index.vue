<template lang="pug">
<TitleBar title="Other" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Other',
    };
  },
  components: {
    Examples,
  },
})
export default class Other extends Vue {}
</script>
