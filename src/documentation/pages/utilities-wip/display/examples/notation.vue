<template lang="pug">
fragment
  <AnchorTitle title="Notation" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#notation`" />
  p.-text
    | Display utility classes can be defined using the format <code>-d-{breakpoint}--{value}</code>.
    | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

  <TargetAllBreakpoints />
  <TargetSpecificBreakpoints />
  <SpecialDisplayClasses />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SpecialDisplayClasses from './_special-display-classes.vue';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';

@Component({
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints,
    SpecialDisplayClasses
  }
})
export default class Notation extends Vue {}
</script>
