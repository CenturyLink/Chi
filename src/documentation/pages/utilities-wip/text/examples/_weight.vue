<template lang="pug">
  <ComponentExample padding="-p--0" title="Text weight" id="text-weight" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text weight to thin, normal, semi-bold, bold, bolder, or boldest.
    .-m--3(slot="example")
      p.-text.-text--thin This text will render as thin
      p.-text.-text--normal This text will render as normal
      p.-text.-text--semi-bold This text will render as semi-bold
      p.-text.-text--bold This text will render as bold
      p.-text.-text--bolder This text will render as bolder
      p.-text.-text--boldest This text will render as boldest
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
export default class Weight extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<p class="-text--thin">This text will render as thin</p>\n' +
        '<p class="-text--normal">This text will render as normal</p>\n' +
        '<p class="-text--semi-bold">This text will render as semi-bold</p>\n' +
        '<p class="-text--bold">This text will render as bold</p>\n' +
        '<p class="-text--bolder">This text will render as bolder</p>\n' +
        '<p class="-text--boldest">This text will render as boldest</p>'
    };
  }
}
</script>
