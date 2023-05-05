<template lang="pug">
fragment
  <AnchorTitle title="Basis" tag="h2" id="basis" />
  p.-text Use the <code>-flex--basis*</code> class to specify the initial size of the flex item, before any available space is distributed according to the flex factors.
  p.-text
    | Flex-basis utility classes can be defined using the format <code>-flex-basis-{breakpoint}--{value}</code>.
    | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

  <BasisTargetAllBreakpoints />
  <BasisTargetSpecificBreakpoints />
  <BasisExamples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BasisExamples from './examples/_basis-examples.vue';
import BasisTargetAllBreakpoints from './examples/_basis-target-all-breakpoints.vue';
import BasisTargetSpecificBreakpoints from './examples/_basis-target-specific-breakpoints.vue';

@Component({
  data() {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }]
    };
  },
  components: {
    BasisTargetAllBreakpoints,
    BasisTargetSpecificBreakpoints,
    BasisExamples
  }
})
export default class Basis extends Vue {}
</script>
