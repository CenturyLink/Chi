<template lang="pug">
  div
    p.-text
      | Target specific breakpoints with Fill responsive classes.
    ul.-mb--3
      li(v-for="breakpoint in breakpoints")
        code {{ `-flex-${ breakpoint }-fill` }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      breakpoints: ['', 'sm-', 'md-', 'lg-', 'xl-'],
    };
  },
})
export default class SpecificBreakpoints extends Vue {}
</script>
