<template lang="pug">
  <ComponentExample title="Plain Text" id="plain_text" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example-description)
      p.-text Use a <code>span</code> tag to include text without rendering as a link.
    template(#example)
      .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
        .chi-dropdown__menu.-active
          span.chi-dropdown__menu-item Text 1
          span.chi-dropdown__menu-item Text 2
          span.chi-dropdown__menu-item Text 3
          span.chi-dropdown__menu-item Text 4
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
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
        htmlblueprint: `<div class="chi-dropdown__menu">
  <span class="chi-dropdown__menu-item">Text 1</span>
  <span class="chi-dropdown__menu-item">Text 2</span>
  <span class="chi-dropdown__menu-item">Text 3</span>
  <span class="chi-dropdown__menu-item">Text 4</span>
</div>`,
      },
    };
  },
})
export default class PlainText extends Vue {}
</script>
