<template lang="pug">
fragment
  <AnchorTitle title="Target specific breakpoints" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#target-specific-breakpoints`" />
  p.-text
    | To target a specific breakpoint, add the breakpoint abbreviation to the class. As Chi is a mobile first library,
    | the value will apply to that specific breakpoint and up.

  <AnchorTitle title="Base" tag="h4" :anchor="`?theme=${$store.state.themes.theme}#base`" />
  table.chi-table.-bordered.-mb--3
    thead
      tr
        th Class
        th Value
    tbody
      each size in ['sm', 'md', 'lg', 'xl']
        tr
          td.-text(width='40%')
            code=`-opacity-${size}--60`
          td.-text 60% opacity on <code>#{size}</code> and up.

  <AnchorTitle title="Hover" tag="h4" :anchor="`?theme=${$store.state.themes.theme}#hover`" />
  table.chi-table.-bordered.-mb--3
    thead
      tr
        th Class
        th Value
    tbody
      each size in ['sm', 'md', 'lg', 'xl']
        tr
          td.-text(width='40%')
            code=`-opacity-hover-${size}--60`
          td.-text 60% opacity on hover on <code>#{size}</code> and up.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TargetSpecificBreakpoints extends Vue {}
</script>
