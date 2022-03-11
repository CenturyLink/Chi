<template lang="pug">
  <ComponentExample title="Alternate Separator" id="alternate-separator" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Apply the <code>-alt</code> class to render breadcrumbs with an alternate separator.
    nav.chi-breadcrumb.-alt(aria-label="Breadcrumb" slot="example")
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
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<nav class="chi-breadcrumb -alt" aria-label="Breadcrumb">
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
export default class AlternateSeparator extends Vue {}
</script>
