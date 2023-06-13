<template lang="pug">
  <ComponentExample padding="-p--0" title="Text wrapping" id="text-wrapping" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Prevent text wrapping with nowrap or control overflow with truncate.
    .-m--3(slot="example")
      p.-text.-text--nowrap(style="width: 11rem;background:#eeeeee;") This text will render without wrapping
      p.-text.-text--truncate(style="width: 11rem;") This text will truncate with an ellipsis
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Wrapping extends Vue {
  codeSnippets = {
    htmlblueprint: '<p class="-text--nowrap">This text will render without wrapping</p>\n' +
      '<p class="-text--truncate">This text will truncate with an ellipsis</p>'
  }
}
</script>
