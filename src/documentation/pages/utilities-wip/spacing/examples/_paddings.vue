<template lang="pug">
  <ComponentExample title="Paddings" id="paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | In this example, various margin classes have been applied to render margin
      | on all 4 sides of the blue squares. The margin can be visualized in blue.
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .-mr--3.example-spacing-padding(v-for="className in classNames" :class="className")
          div.example-spacing-padding__block
    </Wrapper>
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
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-p--2"></div>
<div class="-p--4"></div>
<div class="-p--6"></div>`
      },
      classNames: ['-p--2', '-p--4', '-p--6']
    };
  }
})
export default class Paddings extends Vue {}
</script>
