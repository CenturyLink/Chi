<template lang="pug">
  div
    <TitleAnchor title="Target specific breakpoints" id="breakpoints-specific" titleSize="h3"/>
    p.-text
      | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library, the value
      | will apply to that specific breakpoint and up.

    <TitleAnchor title="Base" id="specific-base" titleSize="h4"/>
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
              code {{ `-opacity-${ size }--60` }}
            td.-text 60% opacity on <code>{{ size }}</code> and up.
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
