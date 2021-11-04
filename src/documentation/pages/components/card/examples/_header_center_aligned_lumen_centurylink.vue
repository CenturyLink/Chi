<template lang="pug">
  <ComponentExample title="Header Center Aligned" id="header_center_aligned_lumen_centurylink" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Apply the class <code>-align--center</code> on <code>chi-card__header</code> to center align its contents.
    div(slot="example")
      .chi-card(style="max-width:20rem;")
        .chi-card__header.-align--center
          .chi-card__title Title
        .chi-card__content
          .chi-card__caption
            | Aenean pretium massa sed vehicula porta. Phasellus id metus felis.
            | Ut felis magna, facilisis ut malesuada nec.
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
  <div class="chi-card__header -align--center">
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
export default class HeaderCenterAlignedLumenCenturylink extends Vue {
  mounted() {}
}
</script>
