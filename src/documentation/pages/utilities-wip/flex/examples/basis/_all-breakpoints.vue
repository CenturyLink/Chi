<template lang="pug">
  div
    <TitleAnchor title="Target all breakpoints" id="basis-all-breakpoints" titleSize="h4"/>
    p.-text
      | Flex-basis utility classes with no breakpoint defined apply to all screen sizes.
    table.chi-table.-bordered.-mb--3.-mt--3
      thead
        tr
          th
            div Flex-basis Class
          th
            div Value
      tbody
        tr(v-for="type in types")
          td(width="40%")
            code="-flex-basis--{{type}}"
          td
            template(v-if="type=='*'")="can be incremented by 5%"
            code(v-else)="flex-basis: {{type}}"
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      types: ['auto', '0', '*'],
    };
  }
})
export default class AllBreakpoints extends Vue {}
</script>
