<template lang="pug">
fragment
  <AnchorTitle title="Target all breakpoints" tag="h3" id="target-all-breakpoints" />
  p.-text Flex-basis utility classes with no breakpoint defined apply to all screen sizes.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Flex-basis Class
            th
              div Value
        tbody
          each type in ['auto', '0', '*']
            tr
              td(width='40%')
                code=`-flex-basis--{type}`
              td
                if (type == 'auto')
                  code=`flex-basis: ${type};`
                else if (type == '0')
                  code=`flex-basis: ${type};`
                else
                  = 'can be incremented by 5%'
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
export default class BasisTargetAllBreakpoints extends Vue {}
</script>
