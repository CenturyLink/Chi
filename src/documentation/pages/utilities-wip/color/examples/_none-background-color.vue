<template lang="pug">
  div
    h4 None
    p.-text Use to render an element with no background-color.
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
          tr
            td(width='25%')
              code= '-bg--none'
            td(width='35%')
              code= 'background: none;'
            td(width='40%')
              .-text.-b--1(style=`background:none;height:15px;`)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class NoneBackgroundColor extends Vue {}
</script>
