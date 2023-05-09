<template lang="pug">
  div
    h4 Semantic
    p.-text
      | Use semantic background-colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    section.chi-table.-bordered.-mt--3.-mb--3
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Color Class
            th
              div Value
            th
              div Result
        tbody
          tr(v-for="color in colors")
            td(width='25%')
              code {{ `-bg--${ color.name }` }}
            td(width='35%')
              code {{ `background-color: ${color.value}` }}
            td(width='40%')
              .-text.-b--1(:style='`background-color:${color.value}; height:15px;`')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      colors: [
        {
          name: 'success',
          value: '#007E44',
        },
        {
          name: 'success-light',
          value: '#DBFAEE',
        },
        {
          name: 'success-lighter',
          value: '#F1FEF8',
        },
        {
          name: 'info',
          value: '#0075C9',
        },
        {
          name: 'info-light',
          value: '#F5F9FC',
        },
        {
          name: 'info-lighter',
          value: '#E0F3FF',
        },
        {
          name: 'warning',
          value: '#A15C00',
        },
        {
          name: 'warning-light',
          value: '#FAECD9',
        },
        {
          name: 'warning-lighter',
          value: '#FFF8ED',
        },
        {
          name: 'danger',
          value: '#D62015',
        },
        {
          name: 'danger-light',
          value: '#FFE8E5',
        },
        {
          name: 'danger-lighter',
          value: '#FFF5F5',
        },
        {
          name: 'muted',
          value: '#53565A',
        },
        {
          name: 'muted-light',
          value: '#EDF0F2',
        },
        {
          name: 'muted-lighter',
          value: '#F8F9F9',
        }
      ]
    }
  }
})

export default class SemanticBackgroundColor extends Vue {}
</script>
