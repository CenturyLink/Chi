<template lang="pug">
  div
    h2(class="-anchor" :id="id") Basis
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use the <code>-flex--basis*</code> class to specify the initial size of the flex item, before any available space is distributed according to the flex factors.
    p.-text
      | Flex-basis utility classes can be defined using the format <code>-flex-basis-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    TargetAllBreakpoints
    TargetSpecificBreakpoints
    FlexBasisExample
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import FlexBasisExample from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'flex-basis'
    };
  },
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints,
    FlexBasisExample
  }
})
export default class Basis extends Vue {}
</script>
