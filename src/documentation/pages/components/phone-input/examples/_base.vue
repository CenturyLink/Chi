<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        chi-label(for="phone-input-base") Phone Number
        chi-phone-input(id="phone-input-base")
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-label for="phone-input-base">Phone Number</chi-label>
<chi-phone-input id="phone-input-base"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class Base extends Vue {}
</script>
