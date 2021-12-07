<template lang="pug">
  <ComponentExample title="Hero" id="hero_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Add a full width image or banner to the top of a card by applying the class <code>chi-card__hero</code>.
    .chi-card(style="max-width:20rem;" slot="example")
      .chi-card__hero.-text--inverse(style="width:100%;background:rgba(0,0,0,0.8);")
        p.-text.-p--6.-text--center Hero Image
      .chi-card__content
        .chi-card__caption
          | This is a hero card
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
        htmlblueprint: `<div class="chi-card">
  <img class="chi-card__hero" src="..." alt="Card Image">
  <div class="chi-card__content">
    <div class="chi-card__caption">This is a hero card</div>
  </div>
</div>`
      }
    };
  }
})
export default class HeroLumenCenturylinkLumenCenturylink extends Vue {
  mounted() {}
}
</script>
