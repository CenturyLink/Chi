<template lang="pug">
  .chi-grid__container.-pt--3
    <ResizeText />
    <ImagesOfText />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResizeText from './_resize_text.vue';
import ImagesOfText from './_images_of_text.vue';

@Component({
  components: {
    ResizeText,
    ImagesOfText,
  }
})
export default class Examples extends Vue {}
</script>
