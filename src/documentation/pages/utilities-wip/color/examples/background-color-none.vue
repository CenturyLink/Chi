<template lang="pug">
fragment
  <AnchorTitle title="None" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#background-color-none`" />
  p.-text Use to render an element with no background-color.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th Color Class
            th Value
            th Result
        tbody
          tr
            td(width='25%')
              code=`-bg--${type}`
            td(width='35%')
              code=`background-color: ${val}`
            td(width='40%')
              .-text.-b--1(style="background:none; height:15px;")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BackgroundColorNone extends Vue {}
</script>
