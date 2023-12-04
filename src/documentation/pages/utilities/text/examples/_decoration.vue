<template lang="pug">
  <ComponentExample padding="-p--0" title="Text decoration" id="text-decoration" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text decoration to no-decoration, underline, or line-through.
    .-m--3(slot="example")
      p.-text(v-for="({ name, value }) in decorations", :class="`-text--${ name }`") This text will render with {{ value }}
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
        }
      ]
    };
  }
})
export default class Decoration extends Vue {
  decorations = [
    { name: 'no-decoration', value: 'no decoration' },
    { name: 'underline', value: 'an underline' },
    { name: 'line-through', value: 'a line through' }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.decorations
      .map(({ name, value }) => `<p class="-text--${ name }">This text will render with ${ value }</p>`)
      .join('\n');
  }
}
</script>
