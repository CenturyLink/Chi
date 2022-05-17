<template lang="pug">
  div
    h2(class="-anchor" :id="id") Responsive
      span
        a(class="-ml--1" :href="'/utilities/opacity/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Responsive opacity classes can be defined using the format <code>-opacity[-{breakpoint}]--{value}</code> and
      | <code>-opacity-hover[-{breakpoint}]--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    TargetAllBreakpoints
    TargetSpecificBreakpoints
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';

@Component({
  data: () => {
    return {
      id: 'responsive'
    };
  },
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints
  }
})
export default class Responsive extends Vue {}
</script>
