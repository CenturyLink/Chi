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
                checkbox?: <code>boolean</code>;
                columns: {
                  from: {
                    title: <code>string</code>;
                    description?: <code>string</code>;
                  };
                  to: {
                    title: <code>string</code>;
                    description?: <code>string</code>;
                  };
                };
                searchInput?: <code>boolean</code>;
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
              <code>TransferListItem[]</code>
          td
            div undefined
        tr
          td
            div <code>modal</code>
          td
            div To define transfer list as modal or add modal configuration
          td.-p--0
            pre.-mb--0.
              <code>TransferListModalConfig | boolean</code>
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
              div <code>TransferListItem</code>
            td.-p--0
              pre.-mb--0.
                interface TransferListItem {
                  label: <code>string</code>;
                  locked?: <code>boolean</code>;
                  selected: <code>boolean</code>;
                  value: <code>string</code>;
                  wildcard?: <code>boolean</code>;
                }
          tr
            td
              div <code>TransferListModalConfig</code>
            td.-p--0
              pre.-mb--0.
                interface TransferListModalConfig {
                  ariaLabel?: <code>boolean</code>;
                  icon?: <code>string</code>;
                  title?: <code>boolean</code>;
                  tooltipMsg?: <code>string</code>;
                }
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {}
</script>
