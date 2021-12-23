<template lang="pug">
  <ComponentExample title="Additional Sizes" id="sizes_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use border top <a href="../../utilities/border">utilities</a> such as
      | <code>-bt--1</code>, <code>-bt--2</code>, <code>-bt--3</code>, or <code>-bt--4</code> to customize a dividers size.
    <Wrapper slot="example">
      p.-text.-m--0
        | -bt--1
      .chi-divider.-bt--1
      .-p--3
      p.-text.-m--0
        | -bt--2
      .chi-divider.-bt--2
      .-p--3
      p.-text.-m--0
        | -bt--3
      .chi-divider.-bt--3
      .-p--3
      p.-text.-m--0
        | -bt--4
      .chi-divider.-bt--4
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-divider -bt--1"></div>
<div class="chi-divider -bt--2"></div>
<div class="chi-divider -bt--3"></div>
<div class="chi-divider -bt--4"></div>`
      }
    };
  }
})
export default class SizesLumenCenturyLink extends Vue {
  mounted() {}
}
</script>
