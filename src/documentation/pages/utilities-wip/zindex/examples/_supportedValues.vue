<template lang="pug">
  div
    <TitleAnchor id="supportedValues">Supported values</TitleAnchor>
      section.chi-table.-sm(slot="example")
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IZIndexes } from '../../../../models/models';

@Component({})
export default class SupportedValues extends Vue {
  @Prop() indexes: IZIndexes[];
}
</script>
