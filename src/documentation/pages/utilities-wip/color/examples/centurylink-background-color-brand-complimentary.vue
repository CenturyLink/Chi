<template lang="pug">
fragment
  <AnchorTitle title="Brand complimentary" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#centurylink-background-color-complimentary`"/>
  p.-text More background-colors that can be used to compliment the primary brand palette.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th Color Class
            th Value
            th Result
        tbody
          each val, type in {'navy': '#083176', 'grey': '#3F4145'}
            tr
              td(width='25%')
                code= `-bg--${type}`
              td(width='35%')
                code= `background-color: ${val}`
              td(width='40%')
                .-text.-b--1(style=`background-color:${val};height:15px;`)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CenturylinkBackgroundColorComplimentary extends Vue {}
</script>
