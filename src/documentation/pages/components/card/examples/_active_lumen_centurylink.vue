<template lang="pug">
  <ComponentExample title="Active" id="active_lumen_centurylink" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Render an active state card with the class <code>-active</code>.
    div(slot="example")
      .chi-card.-active(style="max-width:20rem;")
        .chi-card__content
          .chi-card__caption
            | This is an active card
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
        htmlblueprint: `<div class="chi-card -active">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is an active card</div>
  </div>
</div>`
      }
    };
  }
})
export default class ActiveLumenCenturylink extends Vue {
  mounted() {}
}
</script>
