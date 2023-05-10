<template lang="pug">
  div
    h4 Target specific breakpoints
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As a mobile first framework, it will
      | apply to that specific breakpoint and up.
    section.chi-table.-bordered.-mt--3.-mb--3
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Display Class
            th
              div Value
        tbody
          tr(v-for="size in sizes")
            td(width='40%')
              code {{ `-d-${ size }--none` }}
            td.-text Hidden only on
              code {{ `${ size }` }}
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
export default class TargetSpecificBreakpoints extends Vue {}
</script>
