<template lang="pug">
  <ComponentExample title="Text transform" id="text_transform" :tabs="exampleTabs" padding="-p--0">
    div(slot="example")
      .-p--2
        chi-badge(text-transform='uppercase', class='-m--1')= 'Badge'
        chi-badge(text-transform='lowercase', class='-m--1')= 'BADGE'
        chi-badge(text-transform='capitalized', class='-m--1')= 'badge'
    div(slot="code-webcomponent").chi-tab__description
      | Set the <code>text-transform</code> attribute to <code>uppercase</code> to render badges in uppercase,
      | <code>lowercase</code> to render badges in lowercase and <code>capitalized</code> to render badges as capitalized.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint").chi-tab__description
      | Use the <code>-text--uppercase</code> text utility class to render badges in all uppercase. <code>-text--lowercase</code> and <code>-text--capitalized</code> are also supported.
      <pre class="language-html">
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
        webcomponent: `<chi-badge text-transform="uppercase">Badge</chi-badge>
<chi-badge text-transform="lowercase">BADGE</chi-badge>
<chi-badge text-transform="capitalized">badge</chi-badge>`,
        htmlblueprint: `<div class="chi-badge -text--uppercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--lowercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--capitalized">
  <span>Badge</span>
</div>`
      }
    };
  }
})
export default class TextTransform extends Vue {}
</script>
