<template lang="pug">
  <ComponentExample title="No Border" id="no_border_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Render a card without a border using the class <code>-no-border</code>.
    div(slot="example")
      .chi-card.-no-border(style="max-width:20rem;")
        .chi-card__content
          .chi-card__caption
            | This is a card with no border
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
        htmlblueprint: `<div class="chi-card -no-border">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is a card with no border</div>
  </div>
</div>`
      }
    };
  }
})
export default class NoBorderLumenCenturylink extends Vue {}
</script>
