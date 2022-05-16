<template lang="pug">
  <ComponentExample title="Center Aligned" id="center_aligned_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Center align a card by applying the class <code>-align--center</code>.
    .chi-card.-align--center(style="max-width:20rem;" slot="example")
      .chi-card__content
        .chi-card__title Title
        .chi-card__caption
          | This is a center aligned card
        .chi-card__actions
          button.chi-button.-primary Action
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
        htmlblueprint: `<div class="chi-card -align--center">
  <div class="chi-card__content">
    <div class="chi-card__title">Title</div>
    <div class="chi-card__caption">This is a center aligned card</div>
    <div class="chi-card__actions">
      <button class="chi-button -primary">Action</button>
    </div>
  </div>
</div>`
      }
    };
  }
})
export default class CenterAlignedLumenCenturylink extends Vue {}
</script>
