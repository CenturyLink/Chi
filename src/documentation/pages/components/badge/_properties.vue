<template lang="pug">
  div
    h3 Web Component

    h4 Properties
    section.chi-table.chi-table__options.-bordered.-my--3 
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0', cellspacing='0')
          thead
            tr
              th
                div Property
              th
                div Attribute
              th
                div Description
              th
                div Type
              th
                div Default
          tbody
            tr
              td
                div
                  code= 'color'
              td
                div
                  code= 'color'
              td
                div
                  | to set color of a badge { primary, success, warning, danger, dark, muted, secondary, light }.
              td
                div
                  code= 'string'
              td
                div
                  em undefined
            tr
              td
                div
                  code= 'size'
              td
                div
                  code= 'size'
              td
                div
                  | to set size of a badge { xs or sm }.
              td
                div
                  code= 'string'
              td
                div
                  em undefined
            tr
              td
                div
                  code= 'textTransform'
              td
                div
                  code= 'text-transform'
              td
                div
                  | to transform the badge text { uppercase, lowercase, capitalized }.
              td
                div
                  code= 'string'
              td
                div
                  em undefined
            tr
              td
                div
                  code= 'variant'
              td
                div
                  code= 'variant'
              td
                div
                  | to set variant of a badge { outline, flat }.
              td
                div
                  code= 'string'
              td
                div
                  em undefined
              
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>
