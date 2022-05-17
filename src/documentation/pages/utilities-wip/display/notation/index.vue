<template lang="pug">
  div
    h2(class="-anchor" :id="id") Notation
      span
        a(class="-ml--1" :href="'/utilities/display/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Display utility classes can be defined using the format <code>-d-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    TargetAllBreakpoints
    TargetSpecificBreakpoints
    SpecialDisplayClasses
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import SpecialDisplayClasses from './_special-display-classes.vue';

@Component({
  data: () => {
    return {
      id: 'notation'
    };
  },
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints,
    SpecialDisplayClasses
  }
})
export default class Notation extends Vue {}
</script>
