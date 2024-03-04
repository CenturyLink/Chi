<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Examples
    <ResponsiveImages />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import ResponsiveImages from './_responsiveImages.vue';

@NuxtComponent({
  components: {
    ResponsiveImages,
  },
})
export default class Examples extends Vue {}
</script>
