<template lang="pug">
  div
    TitleBar(title="Sizing" description="Use responsive sizing utility classes to quickly apply widths and heights on elements.")
    .chi-grid__container.-pt--3
      h2(class="-anchor" :id="notation") Notation
        span
          a(class="-ml--1" :href="'/utilities/sizing/?theme=' + $store.state.themes.theme + '#' + notation") #
      p.-text
        | Sizing utility classes can be defined using the format <code>-w-{breakpoint}--{value}</code> for widths and
        | <code>-h-{breakpoint}--{value}</code> for heights.
        | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

      Width
      Height
      MaximumWidthsHeights
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Width from './width/index.vue';
import Height from './height/index.vue';
import MaximumWidthsHeights from './_maximum-width-height.vue';

@Component({
  data: () => {
    return {
      notation: 'notation'
    };
  },
  components: {
    Width,
    Height,
    MaximumWidthsHeights
  }
})
export default class Sizing extends Vue {}
</script>
