<template lang="pug">
<ComponentExample title="Inline Flexbox container" id="inline-flexbox-container" titleSize="h3" additionalClasses="-show--example" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", class="-d--inline-flex", v-html="$data.codeSnippetPrintable")

  pre(class="language-html" slot="code-default")
    code(v-highlight="$data.codeSnippet" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet: '<div class="-d--inline-flex"></div>',
      codeSnippetPrintable:
        '<div class="-text -p--1 -m--1 -d--inline-flex">-d--inline-flex</div>'
    };
  }
})
export default class InlineFlexboxContainer extends Vue {}
</script>
