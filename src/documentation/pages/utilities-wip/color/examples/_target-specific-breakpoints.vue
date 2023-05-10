<template lang="pug">
  div
    h3 Target specific breakpoints
    p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
    section.chi-table.-bordered.-mt--3.-mb--3
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Color Class
            th
              div Value
        tbody
         template(v-for="size in sizes")
            tr(v-for="type in types")
              td(width='40%')
                code {{ `-bg-${ size }--${type}` }}
              td.-text Visible only from
                code {{ ` ${size}` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl'],
      types: ['none', 'primary', 'secondary', 'white', 'black', 'muted', 'grey', 'grey-20', 'grey-20', 'grey-30', 'success', 'info', 'warning', 'danger']
    };
  }
})
export default class TargetSpecificBreakpoints extends Vue {}
</script>
