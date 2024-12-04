<template lang="pug">
  div
    h2 Builder
    <ChiBuilder />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { ChiBuilder } from '@centurylink/chi-builder';

@NuxtComponent({
  components: {
    ChiBuilder,
  },
})
export default class Builder extends Vue {}
</script>
