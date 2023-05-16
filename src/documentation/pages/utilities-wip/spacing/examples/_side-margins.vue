<template lang="pug">
  <ComponentExample title="Side Margins" id="side-margins" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
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
        htmlblueprint: `<!-- margin-top -->
<div class="-mt--3"></div>
<!-- margin-bottom -->
<div class="-mb--3"></div>
<!-- margin-left -->
<div class="-ml--3"></div>
<!-- margin-right -->
<div class="-mr--3"></div>
<!-- margin-left and margin-right -->
<div class="-mx--3"></div>
<!-- margin-top and margin-bottom -->
<div class="-my--3"></div>`
      },
      classNames: ['-mt--3', '-mb--3', '-ml--3', '-mr--3', '-mx--3', '-my--3']
    };
  }
})
export default class SideMargins extends Vue {}
</script>
