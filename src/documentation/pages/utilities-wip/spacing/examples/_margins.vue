<template lang="pug">
  <ComponentExample title="Margins" id="margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | In this example, various margin classes have been applied to render margin
      | on all 4 sides of the blue squares. The margin can be visualized in blue.
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .-mr--3.example-spacing-margin(v-for="className in classNames")
          .example-spacing-margin__block(:class="className")
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
        htmlblueprint: `<div class="-m--2"></div>
<div class="-m--4"></div>
<div class="-m--6"></div>`
      },
      classNames: ['-m--2', '-m--4', '-m--6']
    };
  }
})
export default class Margins extends Vue {}
</script>
