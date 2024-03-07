<template lang="pug">
.chi-grid__container.-pt--3
  <NonTextContent />
  <ImagesOfText />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import NonTextContent from './_non-text-content.vue';
import ImagesOfText from './_images-of-text.vue';

@NuxtComponent({
  components: {
    NonTextContent,
    ImagesOfText,
  },
})
export default class Examples extends Vue {}
</script>
