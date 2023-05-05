<template lang="pug">
fragment
  <AnchorTitle title="Target specific breakpoints" tag="h3" id="target-specific-breakpoints" />
  p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Flex-basis Class
            th
              div Value
        tbody
          each size in ['sm', 'md', 'lg', 'xl']
            each type in ['auto', '0', '*']
              tr
                td.-text(width='40%')
                  code=`-flex-basis-${size}--${type}`
                td
                  if (type == 'auto')
                    | Visible only from <code>#{size}</code>
                  else if (type == '0')
                    | Visible only from <code>#{size}</code>
                  else
                    | Visible only from <code>#{size}</code>, can be incremented by 5%
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }]
    };
  }
})
export default class BasisTargetSpecificBreakpoints extends Vue {}
</script>
