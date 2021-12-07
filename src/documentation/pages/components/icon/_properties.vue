<template lang="pug">
  div
    h2 Web Component

    h3.mt--2 Properties
    section.chi-table.chi-table__methods.-bordered.-my--3
      div
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
                  | OPTIONAL. Color of the Icon.
              td
                div
                  code='"danger" | "dark" | "grey" | "info" | "light" | "muted" | "navy" | "orange" | "primary" | "secondary" | "success" | "warning"'
              td
                div
                  em='undefined'
            tr
              td
                div
                  code= 'icon'
              td
                div
                  code= 'icon'
              td
                div
                  | Icon to be rendered.
              td
                div
                  code='string'
              td
                div
                  em='undefined'
            tr
              td
                div
                  code= 'size'
              td
                div
                  code= 'size'
              td
                div
                  | OPTIONAL. Size of the Icon.
              td
                div
                  code='string'
              td
                div
                  em='undefined'
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {};
  }
})
export default class Properties extends Vue {}
</script>
