<template lang="pug">
  div
    <TitleAnchor title="Supported values" id="supported-values" />
    section.chi-table.-sm
      table
        thead
          tr
            th
              div Class name
            th
              div z-index value
            th
              div Used in
        tbody
          tr(v-for="value in zIndexValues" :key="value.key")
            td
              code -z--{{value.key}}
            td {{value.key}}
            td {{value.text}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { zIndexValues } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      zIndexValues: zIndexValues
    }
  }
})
export default class SupportedValues extends Vue {}
</script>
