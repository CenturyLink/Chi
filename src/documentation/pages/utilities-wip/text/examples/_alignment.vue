<template lang="pug">
  <ComponentExample padding="-p--0" title="Text alignment" id="text-alignment" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text alignment to justified, left, center, or right.
    .-m--3(slot="example")
      p.-text.-text--justify This text will render as justified
      p.-text.-text--left This text will render as left aligned
      p.-text.-text--center This text will render as center aligned
      p.-text.-text--right This text will render as right aligned
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
export default class Alignment extends Vue {
  codeSnippets = {
    htmlblueprint: '<p class="-text--justify">This text will render as justified</p>\n' +
      '<p class="-text--left">This text will render as left aligned</p>\n' +
      '<p class="-text--center">This text will render as center aligned</p>\n' +
      '<p class="-text--right">This text will render as right aligned</p>',
  }
}
</script>
