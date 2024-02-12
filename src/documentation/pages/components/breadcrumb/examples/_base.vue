<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example)
    nav.chi-breadcrumb(aria-label="Breadcrumb")
      ol
        li.chi-breadcrumb__item
          a(href='#') Parent
        li.chi-breadcrumb__item
          a(href='#') Child 1
        li.chi-breadcrumb__item.-active
          a(href='#',aria-current="page") Child 2
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Base extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
      <li class="chi-breadcrumb__item">
        <a href="#">Parent</a>
      </li>
      <li class="chi-breadcrumb__item">
        <a href="#">Child 1</a>
      </li>
      <li class="chi-breadcrumb__item -active">
        <a href="#" aria-current="page">Child 2</a>
      </li>
  </ol>
</nav>`,
  };
}
</script>
