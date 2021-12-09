<template lang="pug">
  <ComponentExample title="Empty" id="empty" :tabs="exampleTabs">
    p.-text(slot="example-description") Render an empty state card with the class <code>-empty</code>.
    .chi-card.-empty(style="max-width:20rem;" slot="example")
      .chi-card__content
        .chi-card__caption
          | This is an empty card
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
