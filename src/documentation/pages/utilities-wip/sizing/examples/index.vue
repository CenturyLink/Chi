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
import { Component, Vue } from 'vue-property-decorator';
import Width from './width.vue';
import WidthExamples from './_width-examples.vue';
import Height from './height.vue';
import HeightExamples from './_height-examples.vue';
import MaximumWidthHeight from './maximum-width-height.vue';

@Component({
  components: {
    Width,
    WidthExamples,
    Height,
    HeightExamples,
    MaximumWidthHeight
  }
})
export default class Examples extends Vue {
}
</script>
