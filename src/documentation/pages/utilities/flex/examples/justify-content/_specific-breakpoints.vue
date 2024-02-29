<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Justify content responsive classes.
    ul.-mb--3
      li(v-for="type in types")
        code {{ `-justify-content--${ type }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="type in types")
          code {{ `-justify-content-${ breakpoint }--${ type }` }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['start', 'end', 'center', 'between', 'around'],
    };
  },
})
export default class JustifySpecificBreakpoints extends Vue {}
</script>
