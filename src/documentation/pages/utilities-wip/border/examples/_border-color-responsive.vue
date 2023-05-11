<template lang="pug">
  <ComponentExample title="Responsive" id="responsive" titleSize="h4" padding="-p--2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use breakpoint classes to change an element's border color on different viewports. Follow the format <code>-b[-{breakpoint}]--{color}</code>.
    <Wrapper slot="example">
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--8
          .-m--1.-p--1.-py--4.-b--1.-b--primary.-b-sm--dark.-b-md--danger.-b-lg--success.-b-xl--warning.-bg--grey-10
            | -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning
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
        htmlblueprint: `<div class="-b--1 -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning"></div>`
      }
    };
  }
})
export default class ResponsiveBorderColor extends Vue {}
</script>
