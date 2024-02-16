<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Align self responsive classes.
    ul.-mb--3
      li(v-for="type in types")
        code {{ `-align-self--${ type }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="type in types")
          code {{ `-align-self-${ breakpoint }--${ type }` }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['start', 'end', 'center', 'baseline', 'stretch'],
    };
  },
})
export default class SpecificBreakpoints extends Vue {}
</script>
