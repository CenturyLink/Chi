<template lang="pug">
<ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
  template(#example-description)
    p.-text Flag icons support the following sizes: <code>-xs</code>, <code>-sm</code>.
      | By default, flag icons render at 24x16px (<code>-sm</code>).
  template(#example)
    .-p--3
      .-d--flex.-align-items--end
        each size in ['xs', 'sm']
          div.-p--2.-m--1
            i(class=`chi-flag-icon icon-us -${size}`, aria-hidden='true')
            p.-text.-text--center.-mb--0= size
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- -xs : 18x12px -->
<i class="chi-flag-icon icon-us -xs" aria-hidden="true"></i>
<!-- -sm : 24x16px -->
<i class="chi-flag-icon icon-us -sm" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Sizes extends Vue { }
</script>
