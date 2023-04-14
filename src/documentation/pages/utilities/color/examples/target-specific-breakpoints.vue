<template lang="pug">
fragment
  AnchorTitle(title="Target specific breakpoints", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#target-specific-breakpoints`")
  p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th Color Class
            th Value
        tbody
          each size in ['sm', 'md', 'lg', 'xl']
            each type in ['none', 'primary', 'secondary', 'white', 'black', 'muted', 'grey', 'grey-20', 'grey-20', 'grey-30', 'success', 'info', 'warning', 'danger']
              tr
                td.-text(width='40%')
                  code=`-bg-${size}--${type}`
                td.-text Visible only from <code>#{size}</code>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {Fragment} from 'vue-fragment'

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {}
    }
  })

  export default class TargetSpecificBreakpoints extends Vue {}
</script>
