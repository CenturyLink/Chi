<template lang="pug">
fragment
  <AnchorTitle title="Examples" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#examples`" />

  <OpacityBase />
  <OpacityHover />

  <AnchorTitle title="Responsive" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#responsive`" />
  p.-text
    | Responsive opacity classes can be defined using the format <code>-opacity[-{breakpoint}]--{value}</code> and
    | <code>-opacity-hover[-{breakpoint}]--{value}</code>.
    | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

  <TargetAllBreakpoints />
  <TargetSpecificBreakpoints />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import OpacityBase from './_base.vue';
import OpacityHover from './_hover.vue';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';

@Component({
  components: {
    OpacityBase,
    OpacityHover,
    TargetAllBreakpoints,
    TargetSpecificBreakpoints
  }
})
export default class Examples extends Vue {}
</script>
