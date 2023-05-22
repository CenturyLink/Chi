<template lang="pug">
  <ComponentExample title="Supported values" id="supportedValues" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" showClipboard="false">
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
            td 
              <p class="-text" style="margin: 0;" >{{index.key}}</p>
            td 
              <p class="-text" style="margin: 0;" >{{index.value.text}}</p>
    </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    indexes: Array
  },
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<img src="" class="-img--responsive" alt="" />`
      }
    };
  }
})

export default class SupportedValues extends Vue {}
</script>
