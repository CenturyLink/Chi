<template lang="pug">
  <ComponentExample title="Semantic States" id="semantic_states" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use semantic colors to communicate meaning to users. Use green (<code>-success</code>) for positive, blue (base state) for informative, 
      | red (<code>-danger</code>) for negative, and yellow (<code>-warning</code>) for needs attention.
    <Wrapper slot="example">
      .-py--2
        .chi-label Success
        chi-progress(value="75" max="100" state="success")
      .-py--2
        .chi-label Warning
        chi-progress(value="50" max="100" state="warning")
      .-py--2
        .chi-label Danger
        chi-progress(value="25" max="100" state="danger")
    </Wrapper>  
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
        webcomponent: `<!-- Success -->
<div class="chi-label">Success</div>
<chi-progress value="75" max="100" state="success"></chi-progress>

<!-- Warning -->
<div class="chi-label">Warning</div>
<chi-progress value="50" max="100" state="warning"></chi-progress>

<!-- Danger -->
<div class="chi-label">Danger</div>
<chi-progress value="25" max="100" state="danger"></chi-progress>`,
        htmlblueprint: `<!-- Success -->
<div class="chi-label" id="example-5">Success</div>
<progress aria-labelledby="example-5" class="-success" value="75" max="100"></progress>

<!-- Warning -->
<div class="chi-label" id="example-6">Warning</div>
<progress aria-labelledby="example-6" class="-warning" value="50" max="100"></progress>

<!-- Danger -->
<div class="chi-label" id="example-7">Danger</div>
<progress aria-labelledby="example-7" class="-danger" value="25" max="100"></progress>`
      }
    };
  }
})
export default class SemanticStates extends Vue {}
</script>
