<template lang="pug">
  ComponentExample(title="Responsive images" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") 
      | Use <code>-img--responsive</code> to enable responsive behavior on image elements.
      | When applied, images will scale proportionally on all devices and not exceed
      | the width or height of their parent container.
    svg.-img--responsive(width='100%' height='250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder responsive image' preserveAspectRatio='xMidYMid slice' focusable='false' slot="example")
      title Placeholder image
      rect(width='100%' height='100%' fill='#000000')
      text(x='50%' y='50%' class='-text--h2' fill='#FFFFFF' dominant-baseline='middle' text-anchor='middle') Responsive image
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'responsive-images-example',
      codeSnippets: `<img src="" class="-img--responsive" alt="">`
    };
  }
})
export default class ResponsiveImages extends Vue {}
</script>
