<template lang="pug">
  .chi-grid__container.-pt--3
      <TitleAnchor title="Notation" id="notation" titleSize="h2" />
      p.-text
        | Position utility classes can be defined using the format <code>-position-{viewport}--{value}</code>.
        | Viewports supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

      <TitleAnchor title="Target all viewports" id="targetAllViewports" titleSize="h2" />
      p.-text Use to set an elements position on all viewports.

      <TitleAnchor title="Base" id="base" additionalClasses="-py--2" titleSize="h2" />
      <Static />
      <Relative />
      <Fixed />
      <Absolute />
      <Sticky />

      <TitleAnchor title="Additional classes" id="additional-classes" additionalClasses="-py--3" titleSize="h2" />
      <FixedTop />
      <FixedBottom />

      <TitleAnchor title="Target specific viewports" id="target-specific-viewports" additionalClasses="-py--3" titleSize="h2" />
      p.-text
        | To target a specific viewport, add the viewport abbreviation to the class.
        | It's important to note that viewport-specific classes apply to their respective
        | viewport and any larger viewport (unless overridden by a larger viewport class).
      <TargetStatic />
      <TargetRelative />
      <TargetFixed />
      <TargetAbsolute />
      <TargetSticky />
      <TargetFixedTop />
      <TargetFixedBottom />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Static from './_static.vue';
import Relative from './_relative.vue';
import Fixed from './_fixed.vue';
import Absolute from './_absolute.vue';
import Sticky from './_sticky.vue';
import FixedTop from './_fixed-top.vue';
import FixedBottom from './_fixed-bottom.vue';
import TargetAbsolute from './_target-absolute.vue';
import TargetFixedBottom from './_target-fixed-bottom.vue';
import TargetFixedTop from './_target-fixed-top.vue';
import TargetFixed from './_target-fixed.vue';
import TargetRelative from './_target-relative.vue';
import TargetStatic from './_target-static.vue';
import TargetSticky from './_target-sticky.vue';

@NuxtComponent({
  components: {
    Static,
    Relative,
    Fixed,
    Absolute,
    Sticky,
    FixedTop,
    FixedBottom,
    TargetAbsolute,
    TargetFixedBottom,
    TargetFixedTop,
    TargetFixed,
    TargetRelative,
    TargetStatic,
    TargetSticky,
  },
})
export default class Examples extends Vue {}
</script>
