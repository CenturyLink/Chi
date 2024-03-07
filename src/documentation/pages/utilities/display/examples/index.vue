<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Notation
    p.-text
      | Display utility classes can be defined using the format <code>-d-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
    <TargetAllBreakpoints />
    <TargetSpecificBreakpoints />
    <SpecialDisplayClasses />
    <DisplayExamples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import SpecialDisplayClasses from './_special-display-classes.vue';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import DisplayExamples from './_display-examples.vue';

@NuxtComponent({
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints,
    SpecialDisplayClasses,
    DisplayExamples,
  },
})
export default class Examples extends Vue {}
</script>
