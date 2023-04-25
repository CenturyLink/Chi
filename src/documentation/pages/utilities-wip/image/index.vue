<template lang="pug">
fragment
  <TitleBar title="Image" description="Use to change the responsive behavior of an image element." />

  section.chi-grid__container.-pt--3
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  components: {
    Examples
  }
})
export default class Image extends Vue {}
</script>
