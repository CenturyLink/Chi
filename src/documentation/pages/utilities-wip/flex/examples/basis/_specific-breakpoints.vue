<template lang="pug">
  div
    <TitleAnchor title="Target specific breakpoints" id="basis-specific-breakpoints" titleSize="h4"/>
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class.
    table.chi-table.-bordered.-mb--3.-mt--3
      thead
        tr
          th
            div Flex-basis Class
          th
            div Value
      tbody
        template(v-for="breakpoint in breakpoints")
          tr(v-for="type in types")
            td.-text(width="40%")
              code="-flex-basis-{{breakpoint}}--{{type}}"
            td.-text
              template
                | Visible only from <code>{{breakpoint}}</code>
                template(v-if="type=='*'") , can be incremented by 5%
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      types: ['auto', '0', '*'],
      breakpoints: ['sm', 'md', 'lg', 'xl'],
    };
  }
})
export default class SpecificBreakpoints extends Vue {}
</script>
