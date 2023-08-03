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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['start', 'end', 'center', 'between', 'around'],
    };
  }
})
export default class JustifySpecificBreakpoints extends Vue {}
</script>
