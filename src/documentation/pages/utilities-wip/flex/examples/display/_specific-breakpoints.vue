<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Display responsive classes.
    ul.-text
      li(v-for="type in types")
        code {{ `-d-${ type }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="type in types")
          code {{ `-d-${ breakpoint }--${ type }` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['flex', 'inline-flex'],
    };
  }
})
export default class DisplaySpecificBreakpoints extends Vue {}
</script>
