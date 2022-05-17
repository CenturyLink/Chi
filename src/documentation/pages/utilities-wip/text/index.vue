<template lang="pug">
  div
    TitleBar(title="Text" description="Use text utility classes to control sizing, color, alignment and more.")
    .chi-grid__container.-pt--3

      TextSize
      TextHeadings
      TextLineHeight
      TextAlignment
      TextDecoration
      TextTransform
      TextWeight
      TextWrapping
      TextColors
      Responsiveness
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextSize from './_text-size.vue';
import TextHeadings from './_text-headings.vue';
import TextLineHeight from './_text-line-height.vue';
import TextAlignment from './_text-alignment.vue';
import TextDecoration from './_text-decoration.vue';
import TextTransform from './_text-transform.vue';
import TextWeight from './_text-weight.vue';
import TextWrapping from './_text-wrapping.vue';
import TextColors from './colors/index.vue';
import Responsiveness from './responsiveness/index.vue';

@Component({
  components: {
    TextSize,
    TextHeadings,
    TextLineHeight,
    TextAlignment,
    TextDecoration,
    TextTransform,
    TextWeight,
    TextWrapping,
    TextColors,
    Responsiveness
  }
})
export default class TextUtility extends Vue {}
</script>
