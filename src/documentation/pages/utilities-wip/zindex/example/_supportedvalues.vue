<template lang="pug">
  <div>
    <ComponentExample title="Supported valuess" id="supportedValuess" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" showClipboard="false" />
      <Wrapper slot="example">
        section.chi-table.-sm
          div
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
                template(v-for="index in indexes")
                  tr(:key="index.key")
                    td
                      code -z--{{index.key}}
                    td 
                      <p class="-text" style="margin: 0;" >{{index.key}}</p>
                    td 
                      <p class="-text" style="margin: 0;" >{{index.value.text}}</p>
      </Wrapper>
    </ComponentExample>
  </div>
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
