<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    nav.chi-breadcrumb(aria-label="Breadcrumb" slot="example")
      ol
        li.chi-breadcrumb__item
          a(href='#') Parent
        li.chi-breadcrumb__item
          a(href='#') Child 1
        li.chi-breadcrumb__item.-active
          a(href='#',aria-current="page") Child 2
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
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
</nav>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
