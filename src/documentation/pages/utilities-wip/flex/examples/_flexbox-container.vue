<template lang="pug">
<ComponentExample title="Flexbox container" id="flexbox-container" titleSize="h3" additionalClasses="-show--example" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="$data.codeSnippetPrintable")

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
      codeSnippet: '<div class="-d--flex"></div>',
      codeSnippetPrintable:
        '<div class="-text -p--2 -m--1 -d--flex">-d--flex</div>'
    };
  }
})
export default class FlexboxContainer extends Vue {}
</script>
