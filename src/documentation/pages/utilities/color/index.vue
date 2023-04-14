<template lang="pug">
div
  TitleBar(title="Color" description="Use shorthand color utility classes to quickly apply or remove colors.")
  section.chi-grid__container.-pt--3
    AnchorTitle(title="Icon color", tag="h2", :anchor="`?theme=${$store.state.themes.theme}#icon-color`")
    p.-text Change icon colors with contextual classes.

    IconColorBrand
    IconColorSemantic

    fragment(v-if="$store.state.themes.theme !== 'centurylink'")
      IconColorBrandComplimentary

    AnchorTitle(title="Background-color", tag="h2", :anchor="`?theme=${$store.state.themes.theme}#icon-color`")
    p.-text
      | Define background-color classes using the format <code>-bg-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    fragment(v-if="$store.state.themes.theme !== 'centurylink'")
      BackgroundColorBrand
      BackgroundColorComplimentary
      BackgroundColorNeutral
      BackgroundColorSemantic

    fragment(v-if="$store.state.themes.theme === 'centurylink'")
      CenturylinkBackgroundColorBrand
      CenturylinkBackgroundColorComplimentary
      CenturylinkBackgroundColorNeutral
      CenturylinkBackgroundColorSemantic

    BackgroundColorNone

    TargetSpecificBreakpoints
    ResponsiveBackgroundColorExamples
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from "vue-fragment";

  import IconColorBrand from "./examples/icon-color-brand.vue";
  import IconColorSemantic from "./examples/icon-color-semantic.vue";
  import IconColorBrandComplimentary from "./examples/icon-color-brand-complimentary.vue";
  import BackgroundColorBrand from "./examples/background-color-brand.vue";
  import BackgroundColorNeutral from "./examples/background-color-neutral.vue";
  import BackgroundColorComplimentary from "./examples/background-color-brand-complimentary.vue";
  import BackgroundColorSemantic from "./examples/background-color-semantic.vue";
  import BackgroundColorNone from "./examples/background-color-none.vue";
  import TargetSpecificBreakpoints from "./examples/target-specific-breakpoints.vue";
  import ResponsiveBackgroundColorExamples from "./examples/responsive-background-color-examples.vue";
  import CenturylinkBackgroundColorBrand from "./examples/centurylink-background-color-brand.vue";
  import CenturylinkBackgroundColorComplimentary from "./examples/centurylink-background-color-brand-complimentary.vue";
  import CenturylinkBackgroundColorNeutral from "./examples/centurylink-background-color-neutral.vue";
  import CenturylinkBackgroundColorSemantic from "./examples/centurylink-background-color-semantic.vue";

  @Component({
    components: {
      Fragment,
      IconColorBrand,
      IconColorSemantic,
      IconColorBrandComplimentary,
      BackgroundColorBrand,
      BackgroundColorNeutral,
      BackgroundColorComplimentary,
      BackgroundColorSemantic,
      BackgroundColorNone,
      TargetSpecificBreakpoints,
      ResponsiveBackgroundColorExamples,
      CenturylinkBackgroundColorBrand,
      CenturylinkBackgroundColorComplimentary,
      CenturylinkBackgroundColorNeutral,
      CenturylinkBackgroundColorSemantic
    },
  })

  export default class Color extends Vue {}
</script>
