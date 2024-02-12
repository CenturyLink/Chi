<template lang="pug">
  <ComponentExample title="Responsive" id="responsive" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text
        | Change viewport size to view the effect. You can do it by resizing your browser window.
    template(#example)
      .chi-grid.-text.-no-gutter.-text--center.-p--2.-bg--grey-15
        .-p--5.-m--2.-bg--white(v-for="size in responsiveSizes" :class="size") {{ size }}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Responsive extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  responsiveSizes: string[] = ['-s--5 -s-md--0', '-s-md--5 -s-xl--0', '-s-xl--5'];

  get codeSnippets() {
    return {
      htmlblueprint: this.responsiveSizes.map((size: string) => `<div class="${size}"></div>`).join('\n'),
    };
  }
}
</script>
