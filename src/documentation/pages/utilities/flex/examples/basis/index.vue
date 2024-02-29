<template lang="pug">
  div
    <TitleAnchor title="Basis" id="basis" titleSize="h3"/>
    p.-text Use the <code>-flex--basis*</code> class to specify the initial size of the flex item, before any available space is distributed according to the flex factors.
    p.-text
      | Flex-basis utility classes can be defined using the format <code>-flex-basis-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    <AllBreakpoints />
    <SpecificBreakpoints/>
    <Examples />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';
import AllBreakpoints from './_all-breakpoints.vue';
import Examples from './_examples.vue';

@NuxtComponent({
  components: {
    AllBreakpoints,
    SpecificBreakpoints,
    Examples,
  },
})
export default class Basis extends Vue {}
</script>
