<template lang="pug">
  <ComponentExample padding="-p--2" title="Hover" id="opacity-hover" titleSize="h3" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
    div
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-w-lg--2(v-for="opacity in opacities")
        .-text.-text--center.-b--1.-rounded.-m--1.-p--2(:class="[`-opacity-hover--${ opacity }`, opacity === 100 ? '-opacity--60' : '']") {{ opacity + '% on hover' }}
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
      opacities: [0, 20, 40, 60, 80, 100],
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
export default class Hover extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.$data.opacities.slice(0, 5).map(opacity => `<div class="-opacity-hover--${ opacity }">...</div>\n`).join('') +
  '<div class="-opacity--60 -opacity-hover--100">...</div>';
  }
}
</script>
