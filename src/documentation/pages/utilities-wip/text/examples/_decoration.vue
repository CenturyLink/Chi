<template lang="pug">
  <ComponentExample padding="-p--0" title="Text decoration" id="text-decoration" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text decoration to no-decoration, underline, or line-through.
    .-m--3(slot="example")
      p.-text.-text--no-decoration This text will render with no decoration
      p.-text.-text--underline This text will render with an underline
      p.-text.-text--line-through This text will render with a line through
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
export default class Decoration extends Vue {
  codeSnippets = {
    htmlblueprint: '<p class="-text--no-decoration">This text will render with no decoration</p>\n' +
      '<p class="-text--underline">This text will render with an underline</p>\n' +
      '<p class="-text--line-through">This text will render with a line through</p>'
  }
}
</script>
