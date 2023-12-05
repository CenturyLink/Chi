<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Align items responsive classes.
    ul.-mb--3
      li(v-for="type in types")
        code {{ `-align-items--${ type }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="type in types")
          code {{ `-align-items-${ breakpoint }--${ type }` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['start', 'end', 'center', 'baseline', 'stretch'],
    };
  }
})
export default class SpecificBreakpoints extends Vue {}
</script>
