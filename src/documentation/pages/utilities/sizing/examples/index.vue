<template lang="pug">
  .chi-grid__container.-pt--3
    <TitleAnchor title="Notation" id="notation" titleSize="h2" />
    p.-text
      | Sizing utility classes can be defined using the format <code>-w-{breakpoint}--{value}</code> for widths and
      | <code>-h-{breakpoint}--{value}</code> for heights.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
    <Width />
    <WidthExamples />
    <Height />
    <HeightExamples />
    <MaximumWidthHeight />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Width from './_width.vue';
import WidthExamples from './_width-examples.vue';
import Height from './_height.vue';
import HeightExamples from './_height-examples.vue';
import MaximumWidthHeight from './_maximum-width-height.vue';

@NuxtComponent({
  components: {
    Width,
    WidthExamples,
    Height,
    HeightExamples,
    MaximumWidthHeight,
  },
})
export default class Examples extends Vue {}
</script>
