<template lang="pug">
  <ComponentExample title="Empty" id="empty" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Render an empty state card with the class <code>-empty</code>.
    div(slot="example")
      .chi-card.-empty(style="max-width:20rem;")
        .chi-card__content
          .chi-card__caption
            | This is an empty card
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
        htmlblueprint: `<div class="chi-card -empty">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is an empty card</div>
  </div>
</div>`
      }
    };
  }
})
export default class Empty extends Vue {
  mounted() {}
}
</script>
