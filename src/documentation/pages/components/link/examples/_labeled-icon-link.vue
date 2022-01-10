<template lang="pug">
  <ComponentExample title="Labeled Icon Link" id="labeled-icon-link" :tabs="exampleTabs" additionalClasses="-text">
    p.-text(slot="example-description")
      | Use labeled icon links to render both text and icons inside link tags.
    <chi-link href="#" slot="example">
      <chi-icon icon="circle-question-outline"></chi-icon>
      <span>Help</span>
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
        webcomponent: `<chi-link href="#">
  <chi-icon icon="circle-question-outline"></chi-icon>
  <span>Help</span>
</chi-link>`,
        htmlblueprint: `<a class="chi-link" href="#">
  <div class="chi-link__content">
    <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
    <span>Help</span>
  </div>
</a>`
      }
    };
  }
})
export default class LabeledIconLink extends Vue {}
</script>
