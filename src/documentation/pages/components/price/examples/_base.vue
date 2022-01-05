<template lang="pug">
<ComponentExample title="Base" id="base" padding="-p--0" :tabs="exampleTabs">
  .-p--3(slot="example")
    .chi-price.-m--3
      sup
        | $
      | 100
      sup
        | 00
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
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-price">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>`,
      },
    };
  },
})
export default class Base extends Vue {}
</script>
