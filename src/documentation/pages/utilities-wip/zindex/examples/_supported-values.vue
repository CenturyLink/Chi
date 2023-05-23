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
          tr(v-for="index in indexes" :key="index.key")
            td
              code -z--{{index.key}}
            td {{index.key}}
            td {{index.text}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { indexes } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      indexes: indexes
    }
  }
})
export default class SupportedValues extends Vue {}
</script>
