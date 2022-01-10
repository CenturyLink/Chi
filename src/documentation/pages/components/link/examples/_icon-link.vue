<template lang="pug">
  <ComponentExample title="Icon Link" id="icon-link" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use icon links to render icons inside link tags. <strong>Note:</strong> All icon links without text labels 
      | must define a label in the <code>alternative-text</code> attribute for accessibility.
    <chi-link href="#" alternative-text="View helpful information about this topic" slot="example">
      <chi-icon icon="circle-question-outline"></chi-icon>
    </chi-link>
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
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-link href="#" alternative-text="View helpful information about this topic">
  <chi-icon icon="circle-question-outline"></chi-icon>
</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#" aria-label="View helpful information about this topic">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
  </div>
</a>`
      }
    };
  }
})
export default class IconLink extends Vue {}
</script>
