<template lang="pug">
  div
    h2(class="-anchor" :id="id") Notation
      span
        a(class="-ml--1" :href="'/utilities/vertical-align/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Vertical-align classes can be defined using the format <code>-vertical-align[-{breakpoint}]--{value}</code>.
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
      id: 'notation'
    };
  },
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints
  }
})
export default class Notation extends Vue {}
</script>
