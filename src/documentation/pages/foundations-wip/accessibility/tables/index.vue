<template lang="pug">
<TitleBar title="Tables" />
<Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';

@NuxtComponent({
  head() {
    return {
      title: 'Chi - Tables',
    };
  },
  components: {
    Examples,
  },
})
export default class Tables extends Vue {}
</script>
