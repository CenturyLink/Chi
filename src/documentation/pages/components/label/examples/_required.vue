<template lang="pug">
  <ComponentExample title="Required / Optional" id="required" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use attribute <code>required</code> or <code>optional</code> if you need to indicate required / optional fields.
    <Wrapper slot="example">
      chi-label(for="input-2", required) Label
      input#input-2-control.-sr--only
      chi-label(for="input-3", optional) Label
      input#input-3-control.-sr--only
    </Wrapper>
    <Wrapper slot="code-webcomponent">    
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">    
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
        webcomponent: `<!-- Required -->
<chi-label required>Label</chi-label>

<!-- Optional -->
<chi-label optional>Label</chi-label>`,
        htmlblueprint: `<!-- Required -->
<label class="chi-label">
  Label
  <abbr class="chi-label__required" title="Required field">*</abbr>
</label>

<!-- Optional -->
<label class="chi-label">
  Label
  <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>
</label>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
