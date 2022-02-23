<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      each size in ['sm', 'md', 'lg']
        p.-text--bold.-mb--3= '-' + size
        .chi-price(class=`-${size}`)
          sup
            | $
          | 100
          sup
            | 00
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
        htmlblueprint: `<div class="chi-price -sm">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -md">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>
<div class="chi-price -lg">
  <sup>$</sup>
  100
  <sup>00</sup>
</div>`,
      },
    };
  },
})
export default class Sizes extends Vue {}
</script>
