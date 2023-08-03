<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Fill responsive classes.
    ul.-mb--3
      li(v-for="i in 2")
        code {{ `-flex--grow${ i - 1 }` }}
      template(v-for="breakpoint in breakpoints")
        li(v-for="i in 2")
          code {{ `-flex-${ breakpoint }--grow${ i - 1 }` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
    };
  }
})
export default class SpecificBreakpoints extends Vue {}
</script>
