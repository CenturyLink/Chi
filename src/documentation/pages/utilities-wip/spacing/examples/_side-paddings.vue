<template lang="pug">
  <ComponentExample title="Side Paddings" id="side-paddings" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
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
        htmlblueprint: `<!-- padding-top -->
<div class="-pt--3"></div>
<!-- padding-bottom -->
<div class="-pb--3"></div>
<!-- padding-left -->
<div class="-pl--3"></div>
<!-- padding-right -->
<div class="-pr--3"></div>
<!-- padding-left and padding-right -->
<div class="-px--3"></div>
<!-- padding-top and padding-bottom -->
<div class="-py--3"></div>`
      },
      classNames: ['-pt--3', '-pb--3', '-pl--3', '-pr--3', '-px--3', '-py--3']
    };
  }
})
export default class SidePaddings extends Vue {}
</script>
