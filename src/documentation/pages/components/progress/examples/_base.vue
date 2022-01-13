<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    <Wrapper slot="example">
      .-py--2
        <div class="chi-label">0%</div>
        <chi-progress value="0" max="100"></chi-progress>
      .-py--2
        <div class="chi-label">50%</div>
        <chi-progress value="50" max="100"></chi-progress>
      .-py--2
        <div class="chi-label">100%</div>
        <chi-progress value="100" max="100"></chi-progress>
    </Wrapper>  
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | To render a progress element, use the <code>progress</code> HTML5 tag. Set the value attribute to indicate the current progress.  
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>  
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
        webcomponent: `<!-- 0% -->
<div class="chi-label">0%</div>
<chi-progress value="0" max="100"></chi-progress>

<!-- 50% -->
<div class="chi-label">50%</div>
<chi-progress value="50" max="100"></chi-progress>

<!-- 100% -->
<div class="chi-label">100%</div>
<chi-progress value="100" max="100"></chi-progress>`,
        htmlblueprint: `<!-- 0% -->
<div class="chi-label" id="example-1">0%</div>
<progress aria-labelledby="example-1" value="0" max="100"></progress>

<!-- 50% -->
<div class="chi-label" id="example-2">50%</div>
<progress aria-labelledby="example-2" value="50" max="100"></progress>

<!-- 100% -->
<div class="chi-label" id="example-3">100%</div>
<progress aria-labelledby="example-3" value="100" max="100"></progress>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
