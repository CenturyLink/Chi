<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Direction responsive classes.
    ul.-text
      li(v-for="type in types")
        code {{ `-flex--${ type }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="type in types")
          code {{ `-flex-${ breakpoint }--${ type }` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      types: ['row', 'row-reverse', 'column', 'column-reverse'],
    };
  }
})
export default class DirectionSpecificBreakpoints extends Vue {}
</script>
