<template lang="pug">
fragment
  <AnchorTitle title="Semantic" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#background-color-semantic`" />
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
          each val, type in {'success': '#007E44', 'success-light': '#DBFAEE', 'success-lighter': '#F1FEF8', 'info': '#0075C9', 'info-light': '#F5F9FC', 'info-lighter': '#E0F3FF', 'warning': '#A15C00', 'warning-light': '#FAECD9', 'warning-lighter': '#FFF8ED', 'danger': '#D62015', 'danger-light': '#FFE8E5', 'danger-lighter': '#FFF5F5', 'muted': '#53565A', 'muted-light': '#EDF0F2', 'muted-lighter': '#F8F9F9'}
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
export default class BackgroundColorSemantic extends Vue {}
</script>
