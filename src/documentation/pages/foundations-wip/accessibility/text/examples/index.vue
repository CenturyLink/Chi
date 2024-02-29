<template lang="pug">
.chi-grid__container.-pt--3
  <ResizeText />
  <ImagesOfText />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import ResizeText from './_resize_text.vue';
import ImagesOfText from './_images_of_text.vue';

@NuxtComponent({
  components: {
    ResizeText,
    ImagesOfText,
  },
})
export default class Examples extends Vue {}
</script>
