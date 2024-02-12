<template lang="pug">
  <ComponentExample padding="-p--0" title="Text decoration" id="text-decoration" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Change text decoration to no-decoration, underline, or line-through.
    template(#example)
      .-m--3
        p.-text(v-for="({ name, value }) in decorations", :class="`-text--${ name }`") This text will render with {{ value }}
    template(#code-htmlblueprint)
       Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Decoration extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  decorations = [
    { name: 'no-decoration', value: 'no decoration' },
    { name: 'underline', value: 'an underline' },
    { name: 'line-through', value: 'a line through' },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.decorations
      .map(({ name, value }) => `<p class="-text--${name}">This text will render with ${value}</p>`)
      .join('\n');
  }
}
</script>
