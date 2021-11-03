<template lang="pug">
  <ComponentExample title="Titled" id="titled_lumen_centurylink" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Add a title to a card by applying the class <code>chi-card__title</code>.
    div(slot="example")
      .chi-card(style="max-width:20rem;")
        .chi-card__content
          .chi-card__title Title
          .chi-card__caption This is a titled card
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
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
export default class TitledLumenCenturylink extends Vue {
  mounted() {}
}
</script>
