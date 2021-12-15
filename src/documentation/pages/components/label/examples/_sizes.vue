<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Label supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>. 
      | The default size is <code>md</code>.
    <Wrapper slot="example">
      chi-label(for="input-4", size='xs') Label
      input#input-4-control.-sr--only
      chi-label(for="input-5", size='sm') Label
      input#input-5-control.-sr--only
      chi-label(for="input-6", size='md') Label
      input#input-6-control.-sr--only
      chi-label(for="input-7", size='lg') Label
      input#input-7-control.-sr--only
      chi-label(for="input-8", size='xl') Label
      input#input-8-control.-sr--only
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
        webcomponent: `<!-- xs -->
<chi-label size="xs">Label</chi-label>

<!-- sm -->
<chi-label size="sm">Label</chi-label>

<!-- md -->
<chi-label size="md">Label</chi-label>

<!-- lg -->
<chi-label size="lg">Label</chi-label>

<!-- xl -->
<chi-label size="xl">Label</chi-label>`,
        htmlblueprint: `<!-- xs -->
<label class="chi-label -xs">Label</label>

<!-- sm -->
<label class="chi-label -sm">Label</label>

<!-- md -->
<label class="chi-label -md">Label</label>

<!-- lg -->
<label class="chi-label -lg">Label</label>

<!-- xl -->
<label class="chi-label -xl">Label</label>`
      }
    };
  }
})
export default class Sizes extends Vue {}
</script>
