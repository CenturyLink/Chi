<template lang="pug">
  div
    <TitleBar title="Error 500" description="Basic 500 level error page template. Indicates a server side error, so no dynamic information is presented." :tabs="[]" />
    .chi-grid__container.-pt--3
      <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

import Examples from './examples/index.vue';

@NuxtComponent({
  components: {
    Examples,
  },
})
export default class Error500 extends Vue {}
</script>
