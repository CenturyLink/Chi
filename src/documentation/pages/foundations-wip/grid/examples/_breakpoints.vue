<template lang="pug">
  div
    <TitleAnchor title="Breakpoints" id="breakpoints" titleSize="h4" />
    div(style="overflow-x:auto;").-mb--2
      table.chi-table.-bordered
        thead
          tr
            th Device
            th Breakpoint range (px)
            th Breakpoint size
            th Columns
            th Gutters (px)
        tbody
          tr(v-for="breakpoint in breakpoints")
            td {{ breakpoint.device }}
            td {{ breakpoint.range }}
            td
              code {{ breakpoint.size }}
            td {{ breakpoint.columns }}
            td {{ breakpoint.gutters }}
              
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: [
        {
          device: 'Phone (portrait)',
          range: '0 - 575',
          size: 'xs',
          columns: '12',
          gutters: '16'
        },
        {
          device: 'Tablet (portrait)',
          range: '575 - 767',
          size: 'sm',
          columns: '12',
          gutters: '16'
        },
        {
          device: 'Tablet (landscape)',
          range: '768 - 991',
          size: 'md',
          columns: '12',
          gutters: '24'
        },
        {
          device: 'Laptop/Desktop (small)',
          range: '992 - 1200',
          size: 'lg',
          columns: '12',
          gutters: '24'
        },
        {
          device: 'Laptop/Desktop',
          range: '1200+',
          size: 'xl',
          columns: '12',
          gutters: '24'
        }
      ]
    };
  }
})
export default class Breakpoints extends Vue {}
</script>
