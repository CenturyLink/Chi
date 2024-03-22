<template lang="pug">
<ComponentExample title="Brand accents" id="brand-complimentary-icon-color" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0">
  template(#example-description)
    p.-text
      | More icon colors that can be used to compliment the primary brand palette.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        i(v-for="icon in icons" :class="`chi-icon icon-atom -md -${icon} -m--1`", aria-hidden='true')
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
      icons: ['icon--accent-1', 'icon--accent-2'],
      codeSnippets: {
        htmlblueprint: `<i class="chi-icon icon-atom -md -icon--accent-1" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--accent-2" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class BrandComplimentaryIconColor extends Vue {}
</script>
