<template lang="pug">
  <ComponentExample title="Text weight" id="text_weight" :tabs="exampleTabs" padding="-p--2">
    <Wrapper slot="example">
      chi-badge(text-weight='normal', class='-m--1')= 'Badge'
      chi-badge(text-weight='semi-bold', class='-m--1')= 'Badge'
      chi-badge(text-weight='bold', class='-m--1')= 'Badge'
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Set <code>text-weight</code> to <code>normal</code> to render badges in a normal font-weight,
        | <code>semi-bold</code> to render badges in a semi-bold font-weight and <code>bold</code> to render badges in a bold font-weight.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | Use the <code>-text--normal</code> text utility class to render badges in a normal font-weight,
        | <code>-text--semi-bold</code> to render badges in a semi-bold font-weight <code>-text--bold</code> to render badges in a bold font-weight.
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-badge text-weight="normal">Badge</chi-badge>
<chi-badge text-weight="semi-bold">Badge</chi-badge>
<chi-badge text-weight="bold">Badge</chi-badge>`,
        htmlblueprint: `<div class="chi-badge -text--normal">
  <span>Badge</span>
</div>
<div class="chi-badge -text--semi-bold">
  <span>Badge</span>
</div>
<div class="chi-badge -text--bold">
  <span>Badge</span>
</div>`
      }
    };
  }
})
export default class TextWeight extends Vue {}
</script>
