<template lang="pug">
  div
    <TitleAnchor title="Target specific breakpoints" id="breakpoints-specific-vertical" />
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library, the value
      | will apply to that specific breakpoint and up.
    table.chi-table.-bordered.-mt--3.-mb--3
      thead
        tr
          th
            div Class
          th
            div Value
      tbody
        tr(v-for="size in sizes")
          td.-text(width='40%')
            code {{`-vertical-align-${ size }--middle`}}
          td.-text
            | Vertical middle aligned on <code>{{`${ size }`}}</code> and up.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl']
    };
  },
})
export default class BreakpointsSpecific extends Vue {}
</script>
