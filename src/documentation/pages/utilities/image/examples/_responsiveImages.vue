<template lang="pug">
  <ComponentExample title="Responsive images" id="base" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Use <code>-img--responsive</code> to enable responsive behavior on image elements.
        | When applied, images will scale proportionally on all devices and not exceed
        | the width or height of their parent container.
    template(#example)
      .-mb--3
        .-p--2
          svg.-img--responsive(width='100%' height='250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder responsive image' preserveAspectRatio='xMidYMid slice' focusable='false')
            title Placeholder image
            rect(width='100%' height='100%' fill='#000000')
            text(x='50%' y='50%' class='-text--h2' fill='#FFFFFF' dominant-baseline='middle' text-anchor='middle') Responsive image
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
        htmlblueprint: `<img src="" class="-img--responsive" alt="" />`,
      },
    };
  },
})
export default class ResponsiveImages extends Vue {}
</script>
