<template lang="pug">
<ComponentExample title="Border Sides" id="border-sides" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Apply borders to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
  template(#example)
    .chi-grid.-text.-no-gutter.-text--center
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders")
        .-m--1.-p--1.-py--5.-bg--grey-10(:class="border") {{ border }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class BorderSides extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  borders = ['-bt--1', '-br--1', '-bb--1', '-bl--1', '-bx--1', '-by--1'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.borders
      .map((item) => {
        return `<div class="${item}"></div>`;
      })
      .join('\n');
  }
}
</script>
