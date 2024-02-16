<template lang="pug">
<ComponentExample title="Side Paddings" id="side-paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Apply padding to specific sides of an element by adding <code>t</code>,
      | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
      | to the class name.
  template(#example)
    .chi-grid.-no-gutter
      .-mr--3.example-spacing-padding(v-for="className in classNames" :class="className.name")
        .example-spacing-padding__block
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SidePaddings extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  classNames = [
    {
      name: '-pt--3',
      value: 'padding-top',
    },
    {
      name: '-pb--3',
      value: 'padding-bottom',
    },
    {
      name: '-pl--3',
      value: 'padding-left',
    },
    {
      name: '-pr--3',
      value: 'padding-right',
    },
    {
      name: '-px--3',
      value: 'padding-left and padding-right',
    },
    {
      name: '-py--3',
      value: 'padding-top and padding-bottom',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classNames
      .map(({ name, value }) => {
        return `<!-- ${value} -->
<div class="${name}"></div>`;
      })
      .join('\n');
  }
}
</script>
