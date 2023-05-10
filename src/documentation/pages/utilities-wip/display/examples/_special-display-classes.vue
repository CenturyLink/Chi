<template lang="pug">
  div
    h4 Special display classes
    p.-text To target screen readers only or a specific media type (@media screen or @media print), use the below classes.
    section.chi-table.-bordered.-mt--3.-mb--3
      table(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Display Class
            th
              div Value
        tbody
          tr
            td(width='40%')
              code= '-sr--only'
            td Screen reader only
          tr
            td(width='40%')
              code= '-d-screen--only'
            td
              code= 'display: block;'
              | on @media screen,
              code= 'display: none;'
              | on @media print.
          tr
            td(width='40%')
              code= '-d-print--only'
            td
              code= 'display: none;'
              | on @media screen,
              code= 'display: block;'
              | on @media print.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SpecialDisplayClasses extends Vue {}
</script>
