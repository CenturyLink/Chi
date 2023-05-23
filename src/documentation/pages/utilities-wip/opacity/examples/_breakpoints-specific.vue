<template lang="pug">
  div
    h3 Target specific breakpoints
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library, the value
      | will apply to that specific breakpoint and up.

    h4 Base
    table.chi-table.-bordered.-mb--3
      thead
        tr
          th       
            div Class
          th
            div Value
      tbody
          tr(v-for="size in sizes")
            td.-text(width='40%')
              code {{ `-opacity-${size}--60` }}
            td.-text 60% opacity on <code>{{size}}</code> and up.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl']
    };
  }
})
export default class BreakpointsSpecific extends Vue {}
</script>
