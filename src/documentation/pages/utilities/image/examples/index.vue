<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Examples
    <ResponsiveImages />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResponsiveImages from './_responsiveImages.vue';

@Component({
  components: {
    ResponsiveImages
  }
})
export default class Examples extends Vue {}
</script>
