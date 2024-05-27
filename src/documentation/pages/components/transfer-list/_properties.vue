<template lang="pug">
h2 JavaScript

h3 Props
section.chi-table.chi-table__options.-bordered.-my--3
  div(style='overflow-x:auto;')
    table.-types.-text(cellpadding='0', cellspacing='0')
      thead
        tr
          th
            div Property
          th
            div Description
          th
            div Interface
          th
            div Default
      tbody
        tr
          td
            div <code>config</code>
          td
            div To customize Transfer list details
          td.-p--0
            pre.-mb--0.
              {
                searchInput?: <code>boolean</code>;
                checkbox?: <code>boolean</code>;
                columns: {
                  from: {
                    title: <code>string</code>;
                    description: <code>string</code>;
                  };
                  to: {
                    title: <code>string</code>;
                    description: <code>string</code>;
                  };
                };
              }
          td
            div undefined
        tr
          td
            div <code>transferListData</code>
          td
            div To provide Transfer list with data
          td.-p--0
            pre.-mb--0.
              <code>TransferListRow[]</code>
          td
            div undefined

h3 Interfaces and types
section.chi-table.chi-table__options.-bordered.-my--3
    div(style='overflow-x:auto;')
      table.-types.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Name
            th
              div Interface
        tbody
          tr
            td
              div <code>TransferListRow</code>
            td.-p--0
              pre.-mb--0.
                interface TransferListRow {
                  value: <code>string</code>;
                  label: <code>string</code>;
                  selected: <code>boolean</code>;
                  locked: <code>boolean</code>;
                  wildcard: <code>boolean</code>;
                }
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {}
</script>
