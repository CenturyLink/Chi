<template lang="pug">
  <ComponentExample padding="-p--0" title="Text weight" id="text-weight" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Change text weight to thin, normal, semi-bold, bold, bolder, or boldest.
    template(#example)
      .-m--3
        p.-text(v-for="weight in weights", :class="`-text--${ weight }`") This text will render as {{ weight }}
    template(#code-htmlblueprint)
       Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Weight extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  weights = ['thin', 'normal', 'semi-bold', 'bold', 'bolder', 'boldest'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.weights
      .map((weight: string) => `<p class="-text--${weight}">This text will render as ${weight}</p>`)
      .join('\n');
  }
}
</script>
