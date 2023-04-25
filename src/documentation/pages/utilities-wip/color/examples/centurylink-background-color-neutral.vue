<template lang="pug">
fragment
  <AnchorTitle title="Neutral" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#centurylink-background-color-neutral`" />
  p.-text Neutral background-colors provide low-contrast backgrounds for application containers, cards, and more.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th Color Class
            th Value
            th Result
        tbody
          each val, type in {'grey-20': '#F8F9F9', 'grey-15': '#F4F5F6', 'grey-20': '#EDF0F2', 'grey-25': '#DADEE2', 'grey-30': '#D0D4D9'}
              tr
                td(width='25%')
                  code=`-bg--${type}`
                td(width='35%')
                  code=`background-color: ${val}`
                td(width='40%')
                  .-text.-b--1(style=`background-color:${val};height:15px;`)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CenturylinkBackgroundColorNeutral extends Vue {}
</script>
