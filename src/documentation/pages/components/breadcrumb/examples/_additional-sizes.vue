<template lang="pug">
<ComponentExample title="Additional Sizes" id="additional-sizes" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Breadcrumbs support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>,
      | <code>-lg</code>, and <code>-xl</code>. The default size is <code>-md</code>.
  template(#example)
    div(v-for="size in sizes")
      p.-text--bold -{{size}}
      nav.chi-breadcrumb.-mb--2(:class="`-${size}`", aria-label='Breadcrumb')
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
export default class AdditionalSizes extends Vue {
  sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
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
    htmlblueprint: `<!-- xs -->
<nav class="chi-breadcrumb -xs" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- sm -->
<nav class="chi-breadcrumb -sm" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- md -->
<nav class="chi-breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- lg -->
<nav class="chi-breadcrumb -lg" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>

<!-- xl -->
<nav class="chi-breadcrumb -xl" aria-label="Breadcrumb">
  <ol>
    <li class="chi-breadcrumb__item">
      <a href="#">Parent</a>
    </li>
    <li class="chi-breadcrumb__item -active">
      <a href="#" aria-current="page">Child</a>
    </li>
  </ol>
</nav>`,
  };
}
</script>
