<template lang="pug">
  <ComponentExample title="Titled" id="titled_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Add a title to a card by applying the class <code>chi-card__title</code>.
    .chi-card(style="max-width:20rem;" slot="example")
      .chi-card__content
        .chi-card__title Title
        .chi-card__caption This is a titled card
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
        htmlblueprint: `<div class="chi-card">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <div class="chi-card__caption">This is a titled card</div>
  </div>
</div>`
      }
    };
  }
})
export default class TitledLumenCenturylink extends Vue {}
</script>
