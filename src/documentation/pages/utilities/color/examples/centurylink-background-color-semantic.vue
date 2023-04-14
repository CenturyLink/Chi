<template lang="pug">
fragment
  AnchorTitle(title="Semantic", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#centurylink-background-color-semantic`")
  p.-text
    | Use semantic background-colors to communicate meaning to users. Examples include displaying alerts, form field
    | validation, user status, application state and more. Use green (success) for positive, blue (info)
    | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
    | for neutral. Semantic colors should never be used for decorative purposes.

  section.chi-table.-bordered.-mt--3.-mb--3
    div
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th Color Class
            th Value
            th Result
        tbody
          each val, type in {'success': '#008000', 'success-light': '#CEF2CE', 'success-lighter': '#E6FAE6', 'info': '#0060FA', 'info-light': '#E6F0FF', 'info-lighter': '#F5F8FC', 'warning': '#946300', 'warning-light': '#F9F5BE', 'warning-lighter': '#FDFBD8', 'danger': '#D81820', 'danger-light': '#FCE8E9', 'danger-lighter': '#FFF5F5', 'muted': '#53565A', 'muted-light': '#EDF0F2', 'muted-lighter': '#F8F9F9'}
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
  import {Fragment} from 'vue-fragment'

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {}
    }
  })

  export default class CenturylinkBackgroundColorSemantic extends Vue {}
</script>
