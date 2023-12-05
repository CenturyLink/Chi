<template lang="pug">
  <ComponentExample title="Responsive" id="responsive" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change viewport size to view the effect. You can do it by resizing your browser window.
    .chi-grid.-text.-no-gutter.-text--center.-p--2.-bg--grey-15(slot="example")
      .-p--5.-m--2.-bg--white(v-for="size in responsiveSizes" :class="size") {{ size }}
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
      ]
    };
  }
})
export default class Responsive extends Vue {
  responsiveSizes: string[] = [
    '-s--5 -s-md--0',
    '-s-md--5 -s-xl--0',
    '-s-xl--5'
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.responsiveSizes
        .map((size: string) => `<div class="${size}"></div>`)
        .join('\n')
    };
  }
}
</script>
