<template lang="pug">
<ComponentExample title="Responsive" id="responsive" titleSize="h4" padding="-p--2" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Use breakpoint classes to change an element's border color on different viewports. Follow the format <code>-b[-{breakpoint}]--{color}</code>.
  template(#example)
    .chi-grid.-no-gutter.-text.-text--center
      .chi-col.-w--8
        .-m--1.-p--1.-py--4.-b--1.-b--primary.-b-sm--dark.-b-md--danger.-b-lg--success.-b-xl--warning.-bg--grey-10
          | -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-b--1 -b--primary -b-sm--dark -b-md--danger -b-lg--success -b-xl--warning"></div>`,
      },
    };
  },
})
export default class ResponsiveBorderColor extends Vue { }
</script>
