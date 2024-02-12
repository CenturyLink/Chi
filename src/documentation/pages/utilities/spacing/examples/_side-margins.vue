<template lang="pug">
  <ComponentExample title="Side Margins" id="side-margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Apply margin to specific sides of an element by adding <code>t</code>,
        | <code>b</code>, <code>l</code>, <code>r</code>, <code>x</code> or <code>y</code>
        | to the class name.
    template(#example)
      .chi-grid.-no-gutter
        .-mr--3.example-spacing-margin(v-for="className in classNames")
          .example-spacing-margin__block(:class="className.name")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SideMargins extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  classNames = [
    {
      name: '-mt--3',
      value: 'margin-top',
    },
    {
      name: '-mb--3',
      value: 'margin-bottom',
    },
    {
      name: '-ml--3',
      value: 'margin-left',
    },
    {
      name: '-mr--3',
      value: 'margin-right',
    },
    {
      name: '-mx--3',
      value: 'margin-left and margin-right',
    },
    {
      name: '-my--3',
      value: 'margin-top and margin-bottom',
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
