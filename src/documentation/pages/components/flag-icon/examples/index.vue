<template lang="pug">
  div
    h2 Examples
    div
      <CountryRegion />
      <Sizes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import CountryRegion from './_country_region.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    CountryRegion,
    Sizes,
  },
})
export default class Examples extends Vue {}
</script>
