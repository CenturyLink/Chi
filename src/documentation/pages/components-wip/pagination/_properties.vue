<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-pagination" />

    h2 Chi Vue
    h3 Props
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Property
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
                  code ariaLabel
              td
                div To define aria label of pagination
              td
                div
                  code string
              td
                div
                  code &apos;Pagination&apos;
            tr
              td
                div
                  code compact
              td
                div To define compact style of pagination
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code currentPage
              td
                div To define current page of pagination
              td
                div
                  code number
              td
                div
                  code 1
            tr
              td
                div
                  code firstLast
              td
                div To add First page / Last page icon buttons
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code inverse
              td
                div To render inverse styled pagination
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code pageJumper
              td
                div To add jump to page text input
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code pageSize
              td
                div To allow use select number of items to show per page
              td
                div
                  code boolean
              td
                div
                  code false
            tr
              td
                div
                  code pages
              td
                div To define number of pages to render
              td
                div
                  code number
              td
                div
                  em undefined
            tr
              td
                div
                  code results
              td
                div To show number of result items
              td
                div
                  code number
              td
                div
                  code 0
            tr
              td
                div
                  code size
              td
                div To define size of pagination elements
              td
                div
                  code string
              td
                div
                  code &apos;md&apos;

    h3 Events
    section.chi-table.chi-table__options.-bordered.-my--3
      div(style='overflow-x:auto;')
        table.-text(cellpadding='0' cellspacing='0')
          thead
            tr
              th
                div Event
              th
                div Description
              th
                div Type
          tbody
            tr
              td
                div
                  code chiPageChange
              td
                div
                  | Triggered when the user navigates to another page by clicking pagination item buttons or changing value of Page Jumper input
              td
                div
                  code CustomEvent&lt;number&gt;
            tr
              td
                div
                  code chiPageSizeChange
              td
                div Triggered when the user changes items per page value
              td
                div
                  code CustomEvent&lt;number&gt;
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>
