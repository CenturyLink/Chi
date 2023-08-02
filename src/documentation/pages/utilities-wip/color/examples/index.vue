<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Icon color
    p.-text Change icon colors with contextual classes.
    <BrandIconColor />
    <SemanticIconColor />
    <BrandComplimentaryIconColor v-if="hideCenturylink" />

    h2 Background-color
    p.-text
      | Define background-color classes using the format <code>-bg-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
    <BrandBackgroundColor />
    <BrandComplimentaryBackgroundColor />
    <NeutralBackgroundColor />
    <SemanticBackgroundColor />
    <NoneBackgroundColor />
    <TargetSpecificBreakpoints />
    <ResponsiveBackgroundExamples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrandIconColor from './_brand-icon-color.vue';
import SemanticIconColor from './_semantic-icon-color.vue';
import BrandComplimentaryIconColor from './_brand-complimentary-icon-color.vue';
import BrandComplimentaryBackgroundColor from './_brand-complimentary-background-color.vue';
import BrandBackgroundColor from './_brand-background-color.vue';
import NeutralBackgroundColor from './_neutral-background-color.vue';
import SemanticBackgroundColor from './_semantic-background-color.vue';
import NoneBackgroundColor from './_none-background-color.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import ResponsiveBackgroundExamples from './_responsive-background-examples.vue';

@Component({
  components: {
    BrandIconColor,
    SemanticIconColor,
    BrandComplimentaryIconColor,
    BrandComplimentaryBackgroundColor,
    NeutralBackgroundColor,
    SemanticBackgroundColor,
    NoneBackgroundColor,
    TargetSpecificBreakpoints,
    ResponsiveBackgroundExamples,
    BrandBackgroundColor
  }
})
export default class Examples extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }
  get hideCenturylink() {
    return this.theme !== 'centurylink';
  }
}
</script>
