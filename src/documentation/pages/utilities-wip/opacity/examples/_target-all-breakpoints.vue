<template lang="pug">
fragment
  <AnchorTitle title="Target all breakpoints" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#target-all-breakpoints`" />
  p.-text Opacity utility classes with no breakpoint defined apply to all screen sizes.

  <AnchorTitle title="Base" tag="h4" :anchor="`?theme=${$store.state.themes.theme}#base`" />
  table.chi-table.-bordered.-mb--3
    thead
      tr
        th Class
        th Value
    tbody
      each type, val in {0: '0', 20: '0.2', 40: '0.4', 60: '0.6', 80: '0.8', 100: '1'}
        tr
          td.-text(width='40%')
            code=`-opacity--${val}`
          td
            code=`opacity: ${type};`

  <AnchorTitle title="Hover" tag="h4" :anchor="`?theme=${$store.state.themes.theme}#hover`" />
  table.chi-table.-bordered.-mb--3
    thead
      tr
        th Class
        th Value
    tbody
      each type, val in {0: '0', 20: '0.2', 40: '0.4', 60: '0.6', 80: '0.8', 100: '1'}
        tr
          td.-text(width='40%')
            code=`-opacity-hover--${val}`
          td
            code=`opacity: ${type};`
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TargetAllBreakpoints extends Vue {}
</script>
