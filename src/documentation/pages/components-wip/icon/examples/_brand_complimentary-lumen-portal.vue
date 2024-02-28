<template lang="pug">
<ComponentExample title="Brand complimentary" titleSize="h4" padding="-p--0" id="brand-complimentary" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | More icon colors that can be used to compliment the primary brand palette.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        div(v-for="color in colors" :class="`chi-icon -${color} -m--1`")
          svg
            use(xlink:href='#icon-atom')
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      colors: ['icon--navy', 'icon--orange'],
      codeSnippets: {
        webcomponent: `<chi-icon icon="atom" color="navy"></chi-icon>
<chi-icon icon="atom" color="orange"></chi-icon>`,
        htmlblueprint: `<i class="chi-icon icon-atom -icon--navy" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--orange" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class BrandComplimentaryLumenPortal extends Vue {}
</script>
