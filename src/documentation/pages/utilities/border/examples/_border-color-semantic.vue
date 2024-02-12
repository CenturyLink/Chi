<template lang="pug">
  <ComponentExample title="Semantic" id="semantic" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use semantic border colors to communicate meaning to users. Use green (success) for positive, blue (info) for informative,
        | red (danger) for negative, and yellow (warning) for needs attention.
    template(#example)
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders" :key="border.className")
          .-m--1.-p--1.-py--5.-b--1(:class="`-b--${border.className} ${border.secondClassName ? border.secondClassName : ''}`") {{ border.title }}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SemanticBorderColor extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  borders = [
    {
      className: 'success',
      title: 'Success',
    },
    {
      className: 'success-light',
      secondClassName: '-bg--success-lighter',
      title: 'Success Light',
    },
    {
      className: 'info',
      title: 'Info',
    },
    {
      className: 'info-light',
      secondClassName: '-bg--info-lighter',
      title: 'Info Light',
    },
    {
      className: 'danger',
      title: 'Danger',
    },
    {
      className: 'danger-light',
      secondClassName: '-bg--danger-lighter',
      title: 'Danger Light',
    },
    {
      className: 'warning',
      title: 'Warning',
    },
    {
      className: 'warning-light',
      secondClassName: '-bg--warning-lighter',
      title: 'Warning Light',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.borders
      .map(({ className }) => {
        return `<div class="-b--1 -b--${className}"></div>`;
      })
      .join('\n');
  }
}
</script>
