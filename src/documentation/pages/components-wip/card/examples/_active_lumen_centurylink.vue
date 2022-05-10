<template lang="pug">
  <ComponentExample title="Active" id="active_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Render an active state card with the class <code>-active</code>.
    .chi-card.-active(style="max-width:20rem;" slot="example")
      .chi-card__content
        .chi-card__caption
          | This is an active card
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
        htmlblueprint: `<div class="chi-card -active">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is an active card</div>
  </div>
</div>`
      }
    };
  }
})
export default class ActiveLumenCenturylink extends Vue {}
</script>
