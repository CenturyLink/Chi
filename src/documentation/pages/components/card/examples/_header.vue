<template lang="pug">
  <ComponentExample title="Header" id="header" :tabs="exampleTabs">
    p.-text(slot="example-description") Apply the class <code>chi-card__header</code> to include a header section to the card.
    .chi-card(style="max-width:20rem;" slot="example")
      .chi-card__header
        .chi-card__title Title
      .chi-card__content
        .chi-card__caption
          | Aenean pretium massa sed vehicula porta. Phasellus id metus felis.
          | Ut felis magna, facilisis ut malesuada nec.
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
  <div class="chi-card__header">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content">
    <div class="chi-card__caption">Aenean pretium massa sed vehicula porta. Phasellus id metus felis. Ut felis magna, facilisis ut malesuada nec.</div>
  </div>
</div>`
      }
    };
  }
})
export default class Header extends Vue {}
</script>
