<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Wrap responsive classes.
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
      types: ['nowrap', 'wrap', 'wrap-reverse'],
    };
  }
})
export default class WrapSpecificBreakpoints extends Vue {}
</script>
